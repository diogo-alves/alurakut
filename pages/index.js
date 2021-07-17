import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBox } from '../src/components/ProfileRelations';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { githubUserAdapter } from '../src/adapters/github';
import { communityAdapter } from '../src/adapters/community';

function ProfileSideBar(props) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <a href={`http://github.com/${props.githubUser}`} className="boxLink">{props.githubUser}</a>
      <p className="userInfo">masculino, casado, Brasil</p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home({githubUser}) {

  const [communities, setCommunities] = React.useState([]);
  const [followers, setFollowers] = React.useState([]);
  const [followingPeople, setFollowingPeople] = React.useState([]);

  React.useEffect(() => {
    // API do Github
    fetch(`https://api.github.com/users/${githubUser}/followers`)
    .then(response => {
        if(response.ok) return response.json()
        throw new Error('Aconteceu alguma coisa...')
    })
    .then(data => setFollowers(data))
    .catch(error => console.log(error))

    fetch(`https://api.github.com/users/${githubUser}/following`)
    .then(response => {
        if(response.ok) return response.json()
        throw new Error('Aconteceu alguma coisa...')
    })
    .then(data => setFollowingPeople(data))
    .catch(error => console.log(error))

    // API do DatoCMS
    fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': process.env.DATOCMS_API_TOKEN,
        },
        body: JSON.stringify({
          query: `{ 
            allCommunities(orderBy: _createdAt_ASC) {
              id
              title
              imageUrl
            }
          }`
        })
    })
    .then(response => {
      if(response.ok) return response.json()
      throw new Error('Aconteceu alguma coisa...')
    })
    .then(result => {
      let allCommunities = result.data.allCommunities;
      setCommunities(allCommunities)
    })
    .catch(error => console.log(error))

  }, [])

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo, {githubUser}</h1>
            <p className="luckDay"><strong>Sorte do dia:</strong> O melhor profeta do futuro é o passado</p>
            <OrkutNostalgicIconSet
              recados="35"
              fotos="1"
              videos="2"
              fas="42"
              mensagens="26"
              confiavel="3"
              legal="3"
              sexy="3"
            />
          </Box>
          <Box>
            <h2 className="subTitle">O que deseja fazer?</h2>
            <form method="POST" onSubmit={function handleCreateCommunity(e) {
              e.preventDefault();
              const formData = new FormData(e.target);
              const community = {
                title: formData.get('title'),
                imageUrl: formData.get('image'),
              }
              fetch('/api/communities', {
                  method: 'POST',
                  body: JSON.stringify(community),
                  headers: {
                    'Content-Type': 'application/json'
                  }
              })
              .then(async response => {
                if(response.ok) return await response.json()
                throw new Error('Aconteceu alguma coisa...')
              })
              .then(data => setCommunities([...communities, data.community]))
              .catch(error => console.log(error))
            }}>
              <div>
                <input 
                  placeholder="Qual será o nome da comunidade?" 
                  name="title" 
                  aria-label="Qual será o nome da comunidade?"
                />
              </div>
              <div>
                <input 
                  placeholder="Adicione a url da imagem de capa" 
                  name="image" 
                  aria-label="Adicione a url da imagem de capa"
                />
              </div>
              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBox title="Pessoas que sigo" items={followingPeople.map(user => githubUserAdapter(user))} />
          <ProfileRelationsBox title="Pessoas que me seguem" items={followers.map(user => githubUserAdapter(user))} />
          <ProfileRelationsBox title="Comunidades" items={communities.map(community => communityAdapter(community))} />
        </div>
      </MainGrid>
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
        Authorization: cookies.USER_TOKEN
    }
  })
  .then(response => response.json())

  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const { githubUser } = jwt.decode(cookies.USER_TOKEN);

  return {
    props: {
      githubUser
    },
  }
}
import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBox } from '../src/components/ProfileRelations';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import {githubUserAdapter, githubFollowerAdapter} from '../src/adapters/github'
import {communityAdapter} from '../src/adapters/community'

function ProfileSideBar(props) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser.username}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <a href={`http://github.com/${props.githubUser.username}`} className="boxLink">{props.githubUser.fullname}</a>
      <p className="userInfo">
        {props.githubUser.gender}, {props.githubUser.relationship}, {props.githubUser.country}
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const MAX_NUM_VISIBLE_RELATIONS = 6;
  const githubUser = {
    username: 'diogo-alves',
    fullname: 'Diogo Alves',
    gender: 'masculino',
    relationship: 'casado',
    country: 'Brasil'
  };
  const [communities, setCommunities] = React.useState([
    { 
      id: '1',
      title: 'Eu Odeio Acordar Cedo',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
      url: 'https://www.orkut.br.com/MainCommunity?cmm=10000',
    },
    { 
      id: '2',
      title: 'Queria Sorvete, Mas Era Feijão',
      image: 'https://i.imgur.com/7g9osTQ.jpg',
      url: 'https://www.orkut.br.com/MainCommunity?cmm=11200',
    },
    { 
      id: '3',
      title: 'Tocava a Campainha e Corria',
      image: 'https://i.imgur.com/Te6JlP3.jpg',
      url: 'https://www.orkut.br.com/MainCommunity?cmm=27296',
    },
  ]);
  const aluraPeople = [
  	 'juunegreiros',
  	 'omariosouto',
  	 'peas',
  	 'rafaballerini',
  	 'marcobrunodev',
  	 'felipefialho',
     'guilhermesilveira',
  ];
  const [followers, setFollowers] = React.useState([]);
  React.useEffect(() => {
    fetch('https://api.github.com/users/diogo-alves/followers')
    .then(response => {
        if(response.ok) return response.json()
        throw new Error('Aconteceu alguma coisa...')
    })
    .then(data => setFollowers(data))
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
            <h1 className="title">Bem vindo, {githubUser.fullname}</h1>
            <p className="luckDay"><b>Sorte do dia:</b> O melhor profeta do futuro é o passado</p>
            <OrkutNostalgicIconSet recados="35" fotos="1" videos="2" fas="42" mensagens="26" confiavel="3" legal="3"  sexy="3" />
          </Box>
          <Box>
            <h2 className="subTitle">O que deseja fazer?</h2>
            <form onSubmit={function handleCreateCommunity(e) {
              e.preventDefault();
              const formData = new FormData(e.target);
              const community = {
                id: Math.random(),
                title: formData.get('title'),
                image: formData.get('image'),
                url: '#',
              }
              setCommunities([...communities, community])
            }}>
              <div>
                <input 
                  placeholder="Qual será o nome da comunidade?" 
                  name="title" 
                  aria-label="Qual será o nome da comunidade?"/>
              </div>
              <div>
                <input 
                  placeholder="Adicione a url da imagem de capa" 
                  name="image" 
                  aria-label="Adicione a url da imagem de capa"/>
              </div>
              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBox title="Pessoas que me seguem" items={followers.map(follower => githubFollowerAdapter(follower))} />
          <ProfileRelationsBox title="Pessoas da Comunidade" items={aluraPeople.map(member => githubUserAdapter(member))} />
          <ProfileRelationsBox title="Comunidades" items={communities.map(community => communityAdapter(community))} />
        </div>
      </MainGrid>
    </>
  )
}
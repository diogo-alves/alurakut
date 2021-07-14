import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

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
  const githubUser = {
    username: 'diogo-alves',
    fullname: 'Diogo Alves',
    gender: 'masculino',
    relationship: 'casado',
    country: 'Brasil'
  };
  const [communities, setCommunities] = React.useState([{
    title: 'Eu Odeio Acordar Cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
  }]);
  const aluraPeople = [
  	'juunegreiros',
  	'omariosouto',
  	'peas',
  	'rafaballerini',
  	'marcobrunodev',
  	'felipefialho',
  ];
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
                title: formData.get('title'),
                image: formData.get('image'),
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
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades <a href="#" className="boxLink">({communities.length})</a>
            </h2>
            <ul>
              {communities.map((community, index) => {
                return (
                  <li key={`community__${index}`}>
                    <a href={`communities/${index}`}>
                      <img src={community.image} style={{ borderRadius: '8px' }} />
                      <span>{community.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
            <div>
              <hr />
              <a href="" className="boxLink">Ver todas</a>
            </div>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade <a href="#" className="boxLink">({aluraPeople.length})</a>
            </h2>
            <ul>
              {aluraPeople.map(person => {
                return (
                  <li key={person}>
                    <a href={`/users/${person}`}>
                      <img src={`https://github.com/${person}.png`} style={{ borderRadius: '8px' }} />
                      <span>{person}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
            <div>
              <hr />
              <a href="" className="boxLink">Ver todas</a>
            </div>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}

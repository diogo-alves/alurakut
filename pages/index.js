import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

function ProfileSideBar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser.username}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = {
    username: 'diogo-alves',
    name: 'Diogo Alves'
  };
  const aluraPeople = [
  	'juunegreiros',
  	'omariosouto',
  	'peas',
  	'rafaballerini',
  	'marcobrunodev',
  	'felipefialho'
  ];
  return (
    <>
      <AlurakutMenu githubUser={githubUser.username} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo, {githubUser.name}</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
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

import React, { useState, useEffect } from 'react'
import{ useParams } from 'react-router-dom';
import { Container, Sidebar, Main, Loading } from "./styles";
import Profile from "./Profile";
import Filter from './Filter'
import Repositories from './Repositories';
import { getUser, getRepos, getLangsFrom } from '../../services/api';

function RepositoriesPage() {

  const{ login } = useParams();

  const [user, setUser] = useState();
  const[repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [ currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const loadData = async () => {
    const [userResponse, repositoriesResponse] = await Promise.all([
      getUser(login),
      getRepos(login)
    ]);
    setUser(userResponse.data);
    setRepositories(repositoriesResponse.data);

    setLanguages( getLangsFrom(repositoriesResponse.data) );

    setLoading(false);
  };

    loadData();
  }, []);



  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  }



  if(loading){
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <Profile user = { user } />
        <Filter languages = { languages } onClick = { onFilterClick } currentLanguage = {currentLanguage}/>
      </Sidebar>
      <Main>
        <Repositories repositories ={ repositories }  currentLanguage = {currentLanguage} />
      </Main>
    </Container>
  )
}

export default RepositoriesPage
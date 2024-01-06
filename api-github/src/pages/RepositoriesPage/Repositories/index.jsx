import React from 'react'
import PropTypes from 'prop-types';
import { Container } from './styles'
import Repository from './Repository'


function Repositories({ repositories, currentLanguage }) {
  const repos = repositories
  .filter((repo) => currentLanguage === undefined || repo.language === currentLanguage)
  .map((repo) => (
    <Repository key={ repositories.id } repository = { repo }/>
  ))

  return (
    <Container>
      { repos }
    </Container>
  )
}

Repositories.defaultProps = {
  currentLanguage: undefined,
}

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired,
  ).isRequired,
  currentLanguage: PropTypes.string,
}

export default Repositories

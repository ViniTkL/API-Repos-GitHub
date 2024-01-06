/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types';
import { Container, Description, Footer, Lang, Link, Name } from './styles'
import { langColors } from '../../../../services/config';

function Repository({ repository }) {
  const color =  langColors[ repository.language && repository.language.toLowerCase() ]

  return (
    <Container color={ color }>
      <Name>{ repository.name }</Name>
      <Description>{ repository.description }</Description>
      <Footer color={ color }>
        <Lang>{ repository.language }</Lang>
        <Link href={ repository.html_url } target='_black'>Ver</Link>
      </Footer>
    </Container>
  )
}

Repository.propTypes = {
  repository: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired,
  ).isRequired
}

export default Repository

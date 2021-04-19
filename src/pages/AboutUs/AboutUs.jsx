import React from 'react'
import { AboutUsContainer, AboutUsWrapper, AboutUsTitulo, AboutUsDescricao, AboutUsGatito } from './AboutUsElements'

const AboutUs = () => {
  return (
    <>
      <AboutUsContainer>
        <AboutUsWrapper>
          <AboutUsTitulo>About us</AboutUsTitulo>
          <AboutUsDescricao>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum felis, ultricies ut semper malesuada, luctus at enim. Ut sodales iaculis libero. Sed hendrerit tellus eu dui hendrerit rhoncus. Aliquam eget risus est.
          </AboutUsDescricao>
          <AboutUsDescricao>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum felis, ultricies ut semper malesuada, luctus at enim. Ut sodales iaculis libero. Sed hendrerit tellus eu dui hendrerit rhoncus. Aliquam eget risus est.
          </AboutUsDescricao>
          <AboutUsDescricao>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum felis, ultricies ut semper malesuada, luctus at enim. Ut sodales iaculis libero. Sed hendrerit tellus eu dui hendrerit rhoncus. Aliquam eget risus est.
          </AboutUsDescricao>
          <AboutUsGatito>Gatitos...</AboutUsGatito>
        </AboutUsWrapper>
      </AboutUsContainer>
    </>
  )
}

export default AboutUs
import styled from 'styled-components'
import Background from '../../assets/img/dog-cat.jpg'


export const AboutUsContainer = styled.section`
  border-radius: 5px;

  max-width: 1100px;
  height: 76vh;

  background-image: url(${Background});
  background-repeat: norepeat;
  background-size: cover;

  margin: 0 auto;

  position: relative;
`

export const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--black-trans-aboutus);

  width: 600px;
  height: 500px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  border-radius: 10px;

  color: var(--white);
`

export const AboutUsTitulo = styled.h2`
  font-size: 2rem;

  text-align: center;

  padding: 1rem;
  margin-bottom: 1rem;
`

export const AboutUsDescricao = styled.p`
  font-size: 1.3rem;

  margin: 0 3rem 1rem 3rem;
`

export const AboutUsGatito = styled.p`
  text-align: right;

  padding: 3rem 2rem 0 0;
`
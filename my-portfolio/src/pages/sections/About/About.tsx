import './About.css'

export default function About() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/curriculo.pdf';
    link.download = 'Cúrriculo_Thiago_Rambo.pdf';
    link.click();
  };

  return(
    <div id='about' className='container-about'>

        <div className='container-sobre'>
          <h1>Sobre mim</h1>

          <p>Meu nome é Thiago Rambo, sou formado em Engenharia de Software e estou em busca de me desenvolver cada vez mais como programador fullstack. Minha principal motivação é aplicar meus conhecimentos para promover melhorias e inovações que impactem positivamente empresas e pessoas.</p>
        </div>

        <div className='container-cv'>
          <h1>Cúrriculo</h1>
          <p>Para mais informações, baixar meu cúrriculo.</p>
          <button className='btn-cv' onClick={handleDownload}>Download</button>
        </div>

    </div>
  )
}
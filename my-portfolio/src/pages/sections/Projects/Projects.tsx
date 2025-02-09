import './Projects.css';

export default function Projects() {
  return (
    <div id="projects" className="container-box3">

      <div className="container-projects-header">
        <h1>Meus Projetos</h1>
      </div>

      <div className="container-projects-list">

        {/* Primeiro Card */}
        <div data-aos="zoom-in" data-aos-delay="100" className="project-card">
          <div className="card-front card-img-1">
            <h2>PilotTrack</h2>
          </div>
          <div className="card-back">
            <h2>PilotTrack</h2>
            <p>Sistema para registro de horas de voo e hectares, proporcionando organização e controle precisa para pilotos agrícolas.</p>
            <div className='project-container-links'>
              <a href="#" target="_blank" className="project-link">Em desenvolvimento</a>
              <a href="#" target="_blank" className="project-link">Em desenvolvimento</a>
            </div>
          </div>
        </div>

        {/* Segundo Card */}
        <div data-aos="zoom-in" data-aos-delay="200" className="project-card">
          <div className="card-front card-img-2">
            <h2>Barbershop System</h2>
          </div>
          <div className="card-back">
            <h2>Barbershop System</h2>
            <p>Sistema para gestão de barbearias.</p>
            <div className='project-container-links'>
              <a href="#" target="_blank" className="project-link">Em desenvolvimento</a>
              <a href="#" target="_blank" className="project-link">Em desenvolvimento</a>
            </div>
          </div>
        </div>

        {/* Terceiro Card */}
        <div data-aos="zoom-in" data-aos-delay="300"className="project-card">
          <div className="card-front card-img-3">
            <h2>Hamburgueria</h2>
          </div>
          <div className="card-back">
            <h2>Hamburgueria</h2>
            <p>Sistema para hamburguerias, permite que clientes façam pedidos diretamente para o WhatsApp, agilizando o atendimento. Com um cardápio digital e integração fácil.</p>
            <div className='project-container-links'>
            <a href="https://github.com/ThiagoRambo/Hamburgueria" target="_blank" className="project-link">Ver no Github</a>
            <a href="https://hamburgueria-xi-five.vercel.app/" target="_blank" className="project-link">Ver projeto</a>
            </div>
          </div>
        </div>

        {/* Quarto Card */}
        <div data-aos="zoom-in" data-aos-delay="400" className="project-card">
          <div className="card-front card-img-4">
            <h2>LH LinkTree</h2>
          </div>
          <div className="card-back">
            <h2>LH LinkTree</h2>
            <p>Link Tree personalizado feito para empresa de Luís Eduardo Magalhães - BA</p>
            <div className='project-container-links'>
              <a href="https://github.com/ThiagoRambo/LHLinkTree" target="_blank" className="project-link">Ver no Github</a>
              <a href="https://lh-link-tree.vercel.app/" target="_blank" className="project-link">Ver projeto</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
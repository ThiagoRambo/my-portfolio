import './Projects.css';

export default function Projects() {
  return (
    <div id="projects" className="container-box3">

      <div className="container-projects-header">
        <h1>Meus Projetos</h1>
      </div>

      <div className="container-projects-list">
        {/* Primeiro Card */}
        <div className="project-card">
          <div className="card-front card-img-1">
            <h2>PilotTrack</h2>
          </div>
          <div className="card-back">
            <h2>PilotTrack</h2>
            <p>Sistema para registro de horas de voo e hectares, proporcionando organização e controle preciso para pilotos agrícolas.</p>
            <a href="https://github.com/seuprojeto3" target="_blank" className="project-link">Ver no GitHub</a>
          </div>
        </div>

        {/* Segundo Card */}
        <div className="project-card">
          <div className="card-front card-img-2">
            <h2>Barbershop System</h2>
          </div>
          <div className="card-back">
            <h2>Barbershop System</h2>
            <p>Sistema para gestão de barbearias.</p>
            <a href="https://github.com/seuprojeto4" target="_blank" className="project-link">Ver no GitHub</a>
          </div>
        </div>

      </div>
    </div>
  );
}




{/* <div className="container-projects-list">

  <div className="project-card">
    <h2>PilotTrack</h2>
    <p>Sistema para registro de horas de voo de pilotos agrícolas, ajudando na organização e segurança das operações.</p>
    <a href="https://github.com/seuprojeto3" target="_blank" className="project-link">Ver no GitHub</a>
  </div>

  <div className="project-card">
    <h2>Barbershop Manager</h2>
    <p>Aplicativo para barbearias, com agendamento de horários, controle de clientes e gestão financeira.</p>
    <a href="https://github.com/seuprojeto3" target="_blank" className="project-link">Ver no GitHub</a>
  </div>

  <div className="project-card">
    <h2>Finance Tracker</h2>
    <p>Ferramenta para controle financeiro pessoal, com gráficos e relatórios detalhados.</p>
    <a href="https://github.com/seuprojeto3" target="_blank" className="project-link">Ver no GitHub</a>
  </div>

</div> */}































{/* <div className="container-projects-list">

<div className="project-card">
  <h2>PilotTrack</h2>
  <p>Sistema para registro de horas de voo de pilotos agrícolas, ajudando na organização e segurança das operações.</p>
  <a href="https://github.com/seuprojeto1" target="_blank" className="project-link">Ver no GitHub</a>
</div>

<div className="project-card">
  <h2>Barbershop Manager</h2>
  <p>Aplicativo para barbearias, com agendamento de horários, controle de clientes e gestão financeira.</p>
  <a href="https://github.com/seuprojeto2" target="_blank" className="project-link">Ver no GitHub</a>
</div>

<div className="project-card">
  <h2>Finance Tracker</h2>
  <p>Ferramenta para controle financeiro pessoal, com gráficos e relatórios detalhados.</p>
  <a href="https://github.com/seuprojeto3" target="_blank" className="project-link">Ver no GitHub</a>
</div>

</div> */}
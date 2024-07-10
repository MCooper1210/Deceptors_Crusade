const template = document.createElement("template");
template.innerHTML = `
    <nav class="navbar navbar_custom navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="#">
        <img src="/img/hydra_blue.jpg" width="50" height="50" fill="#999999" class="hydra d-inline-block align-center mr-3" alt="Alpha Legion Symbol" />
        Alpha Legion Crusade</a
      >
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/index.html">Home Page</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/chaos_favour.html">Chaos Favour</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Units </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/units/master_of_executions.html">Master of Executions</a>
              <a class="dropdown-item" href="/units/chaos_lord.html">Chaos Lord</a>
              <a class="dropdown-item" href="/units/chaos_sorcerer.html">Chaos Sorceror</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/units/legionaries_melee.html">Legionaires Melee</a>
              <a class="dropdown-item" href="/units/legionaries_ranged.html">Legionaires Ranged</a>
              <a class="dropdown-item" href="/units/traitor_guardsmen.html">Traitor Guardsmen</a>
              <a class="dropdown-item" href="/units/havocs.html">Havocs</a>
              <a class="dropdown-item" href="/units/predator_destructor.html">Predator Destructor</a>
              <a class="dropdown-item" href="/units/helbrute.html">Helbrute</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
`;

class navtemplate extends HTMLElement {
  constructor() {
    super();

    const clone = template.content.cloneNode(true);
    this.appendChild(clone);
  }
}

window.customElements.define("nav-template", navtemplate);

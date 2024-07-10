class UnitDetails extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const unitType = this.getAttribute("unit-type");
    fetch(`/data/${unitType}.json`)
      .then((response) => response.json())
      .then((data) => this.updateUnitDetails(data))
      .catch((error) => console.error("Error fetching unit data:", error));
  }

  updateUnitDetails(data) {
    this.innerHTML = `
        <div class="hydra_background">
          <h1 class="text-center" id="unit-title">${data.title}</h1>
          <div class="container">
            <div class="d-flex flex-row justify-content-center align-items-end flex-wrap">
              <div class="crusade_stats flex-fill">
                <p>Battles Played</p>
                <p id="battles-played">${data.battlesPlayed}</p>
              </div>
              <div class="crusade_stats flex-fill">
                <p>Battles Survived</p>
                <p class="align-center" id="battles-survived">${data.battlesSurvived}</p>
              </div>
              <div class="crusade_stats flex-fill">
                <p>Units Destroyed</p>
                <p id="units-destroyed">${data.unitsDestroyed}</p>
              </div>
            </div>
            <div class="d-flex flex-row justify-content-center align-items-end flex-wrap">
              <div class="crusade_stats flex-fill">
                <p>Unit Size</p>
                <p id="unit-size">${data.unitSize}</p>
              </div>
              <div class="crusade_stats flex-fill">
                <p>Unit Cost</p>
                <p id="unit-cost">${data.unitCost}</p>
              </div>
              <div class="crusade_stats flex-fill">
                <p>Experience</p>
                <p id="experience">${data.experience}</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="d-flex justify-content-center">
                  <img class="unit mb-1" src="${data.image}" id="unit-image" />
                </div>
                <div class="table-responsive">
                  <table class="table table-dark" id="stats-table">
                    <tr>
                      <th>M</th>
                      <th>T</th>
                      <th>Sv</th>
                      <th>W</th>
                      <th>Ld</th>
                      <th>OC</th>
                    </tr>
                    <tr>
                      <td id="M">${data.stats.M}</td>
                      <td id="T">${data.stats.T}</td>
                      <td id="Sv">${data.stats.Sv}</td>
                      <td id="W">${data.stats.W}</td>
                      <td id="Ld">${data.stats.Ld}</td>
                      <td id="OC">${data.stats.OC}</td>
                    </tr>
                  </table>
                </div>
                <div class="table-responsive">
                  <table class="table table-dark" id="ranged-weapons-table">
                    <tr>
                      <th>Ranged Weapons</th>
                      <th>Range</th>
                      <th>A</th>
                      <th>BS</th>
                      <th>S</th>
                      <th>AP</th>
                      <th>D</th>
                    </tr>
                    ${data.rangedWeapons
                      .map(
                        (weapon) => `
                      <tr>
                        <td>${weapon.name} ${weapon.type}</td>
                        <td>${weapon.range}</td>
                        <td>${weapon.A}</td>
                        <td>${weapon.BS}</td>
                        <td>${weapon.S}</td>
                        <td>${weapon.AP}</td>
                        <td>${weapon.D}</td>
                      </tr>
                    `,
                      )
                      .join("")}
                  </table>
                </div>
                <div class="table-responsive">
                  <table class="table table-dark" id="melee-weapons-table">
                    <tr>
                      <th>Melee Weapons</th>
                      <th>Range</th>
                      <th>A</th>
                      <th>BS</th>
                      <th>S</th>
                      <th>AP</th>
                      <th>D</th>
                    </tr>
                    ${data.meleeWeapons
                      .map(
                        (weapon) => `
                      <tr>
                        <td>${weapon.name} ${weapon.type}</td>
                        <td>${weapon.range}</td>
                        <td>${weapon.A}</td>
                        <td>${weapon.BS}</td>
                        <td>${weapon.S}</td>
                        <td>${weapon.AP}</td>
                        <td>${weapon.D}</td>
                      </tr>
                    `,
                      )
                      .join("")}
                  </table>
                </div>
              </div>
              <div class="col">
                <table class="table table-dark" id="abilities-table">
                  <tr>
                    <th>Ability</th>
                    <th>Description</th>
                  </tr>
                  ${data.abilities
                    .map(
                      (ability) => `
                    <tr>
                      <td>${ability.name}</td>
                      <td>${ability.description}</td>
                    </tr>
                  `,
                    )
                    .join("")}
                </table>
                <table class="table table-dark">
                  <tr>
                    <th>Battle Honours</th>
                  </tr>
                  <tr>
                    <td id="battle-honours">${data.battleHonours || "None"}</td>
                  </tr>
                </table>
                <table class="table table-dark">
                  <tr>
                    <th>Enhancements and Upgrades</th>
                  </tr>
                  <tr>
                    <td id="enhancements-upgrades">${data.enhancementsUpgrades || "None"}</td>
                  </tr>
                </table>
                <table class="table table-dark">
                  <tr>
                    <th>Battle Scars</th>
                  </tr>
                  <tr>
                    <td id="battle-scars">${data.battleScars || "None"}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      `;
  }
}

window.customElements.define("unit-details", UnitDetails);

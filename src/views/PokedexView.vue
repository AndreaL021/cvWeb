<template>
  <div class="container text-center pt-3">
    <h1 style="font-family: fantasy; color: #0d6efd">Pokedex</h1>
    <div class="row d-flex justify-content-center">
      <div class="col-6 col-md-4 col-lg-3" style="padding: 0px 0px 0px 0px">
        <autocomplete
          ref="autocomplete"
          @change="searchPokemon"
          v-model="inputValue"
          :pokemon="pokemon_list"
        ></autocomplete>
        <!-- :inputValue="inputValue" -->
        <!-- <select class="form-control form-control-lg">
          <option>Large select</option>
        </select> -->
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div
        class="col-12 col-md-6 col-lg-4 d-flex justify-content-center py-2"
        v-for="(p, i) in selected_pokemon ? [selected_pokemon] : pokemon"
        :key="i"
      >
        <div
          class="card card-hover p-2"
          style="
            width: 18rem;
            border-radius: 10px;
            border: gold solid 4px;
            background-color: gold;
          "
        >
          <div
            @click="dialog = true"
            :style="{
              cursor: 'pointer',
              background: 'url(' + p.sprite + ')',
              height: '200px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              border: 'solid 1px black',
              backgroundColor: 'white',
            }"
          ></div>
          <!-- <img class="card-img-top" style="width: 200px;" :src="p.sprite" alt="Card image cap" /> -->
          <div class="card-body">
            <h5 class="card-title">{{ p.name.toUpperCase() }}</h5>
            <div class="row">
              <div class="col-6 text-center" style="font-weight: bold">
                N° {{ p.order }}
              </div>
              <div class="col-6 text-center" style="font-weight: bold">
                <fa-i
                  @click="play(p)"
                  style="cursor: pointer"
                  icon="fa-solid fa-volume-high"
                ></fa-i>
              </div>
              <div class="col-6">{{ p.weight / 10 }}KG</div>
              <div class="col-6">{{ p.height / 10 }}M</div>
            </div>
            <div class="row">
              <div class="col-6" v-for="t in p.types" :key="p.types.indexOf(t)">
                <h4 :class="t">{{ t.toUpperCase() }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <fa-i
      v-if="pokemon.length < pokemon_list.length && !selected_pokemon"
      icon="fa-solid fa-plus"
      class="btn btn-primary my-5 pointer"
      style="font-size: 35px"
      @click="getDetails"
    ></fa-i>
    <div v-show="overlay" class="overlay">
      <fa-i icon="fas fa-spinner" style="color: white" spin-pulse></fa-i>
    </div>
    <!-- <div v-if="dialog" class="dialog" @click="dialog = false">
      <div class="card" style="width: 18rem" @click.prevent>
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
class Pokemon {
  constructor(arg = undefined) {
    if (arg != undefined) {
      const campi = this.setCampi();
      campi.forEach((c) => {
        this[c.nome] = arg[c.nome] != undefined ? arg[c.nome] : c.default_val;
      });
    } else {
      const campi = this.setCampi();
      campi.forEach((c) => {
        this[c.nome] = c.default_val;
      });
    }
  }
  // Metodo per resettare tutti i campi
  reset() {
    const campi = this.setCampi();

    campi.forEach((c) => {
      this[c.nome] = c.default_val;
    });
  }

  setCampi() {
    const campi = [
      { nome: "name", default_val: "" },
      { nome: "url", default_val: "" },
      { nome: "sprite", default_val: "" },
      { nome: "cries", default_val: "" },
      { nome: "types", default_val: [] },
      { nome: "weight", default_val: null },
      { nome: "height", default_val: null },
      { nome: "order", default_val: null },
    ];

    return campi;
  }
}

export default {
  name: "Pokedex",
  data() {
    return {
      inputValue: {
        name: "",
        url: "",
      },
      dialog: false,
      overlay: false,
      pokemon: [],
      pokemon_list: [],
      url: { next: "https://pokeapi.co/api/v2/pokemon?offset=0&&limit=100000" },
      selected_pokemon: null,
      newpokemon: new Pokemon(),
    };
  },
  watch: {
    // dialog(newValue) {
    //   if (newValue) {
    //     document.body.classList.add("body-no-scroll");
    //   } else {
    //     document.body.classList.remove("body-no-scroll");
    //   }
    // },
  },
  methods: {
    play(p) {
      const audio = new Audio();
      audio.src = p.cries;
      audio.play();
    },
    async searchPokemon() {
      this.overlay = true;
      console.log("change");
      if (this.inputValue.url === "") {
        this.overlay = false;
        return (this.selected_pokemon = null);
      }
      this.selected_pokemon = new Pokemon(this.inputValue);
      const res = await fetch(this.selected_pokemon.url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (res.status == 200) {
        res.data = await res.json();
        res.data.types.forEach((type) => {
          this.selected_pokemon.types.push(type.type.name);
        });
        this.selected_pokemon.weight = res.data.weight;
        this.selected_pokemon.height = res.data.height;
        this.selected_pokemon.order = res.data.id;
        this.selected_pokemon.cries = res.data.cries.latest;
        console.log(this.selected_pokemon.cries);
        this.selected_pokemon.sprite = res.data.sprites.other.dream_world
          .front_default
          ? res.data.sprites.other.dream_world.front_default
          : res.data.sprites.other["official-artwork"].front_default
          ? res.data.sprites.other["official-artwork"].front_default
          : res.data.sprites.other.home.front_default;
      }
      this.overlay = false;
      console.log(this.selected_pokemon);
    },
    selectItem(item) {
      this.selected_pokemon = JSON.parse(JSON.stringify(item));
    },
    async getPokemon() {
      this.overlay = true;
      const res = await fetch(this.url.next, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (res.status == 200) {
        res.data = await res.json();
        this.url = {
          next: res.data.next,
          previous: res.data.previous,
        };
        this.pokemon_list = res.data.results;
        this.getDetails();
      } else this.overlay = false;
    },
    async getDetails() {
      this.overlay = true;
      const n = this.pokemon.length;

      for (let i = 0; i < 15; i++) {
        if (this.pokemon.length < this.pokemon_list.length) {
          let newp = new Pokemon(this.pokemon_list[n + i]);
          const res = await fetch(newp.url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
          if (res.status == 200) {
            res.data = await res.json();
            res.data.types.forEach((type) => {
              newp.types.push(type.type.name);
            });
            newp.weight = res.data.weight;
            newp.height = res.data.height;
            newp.order = res.data.id;
            newp.cries = res.data.cries.latest;
            newp.sprite = res.data.sprites.other.dream_world.front_default
              ? res.data.sprites.other.dream_world.front_default
              : res.data.sprites.other["official-artwork"].front_default
              ? res.data.sprites.other["official-artwork"].front_default
              : res.data.sprites.other.home.front_default;
            this.pokemon.push(newp);
          }
        }
      }
      this.pokemon = this.pokemon.sort((a, b) =>
        a.order > b.order ? 1 : b.order > a.order ? -1 : 0
      );
      console.log(this.pokemon.length);
      this.overlay = false;
      //   console.log(this.pokemon);
    },
  },
  async created() {
    await this.getPokemon();
  },
};
</script>
<style scoped>
.pointer {
  color: white;
  background-color: #0d6efd;
  border: solid 1px black;
}
.pointer:hover {
  cursor: pointer;
  color: #0d6efd;
  background-color: white;
  border: solid 1px black;
}
.grass {
  background-color: rgb(44, 110, 0);
  color: white;
}
.poison {
  background-color: rgb(87, 11, 83);
  color: white;
}
.bug {
  background-color: rgb(114, 136, 18);
  color: white;
}
.normal {
  background-color: rgb(102, 102, 102);
  color: white;
}
.flying {
  background-color: rgb(0, 140, 255);
  color: white;
}
.electric {
  background-color: rgb(211, 207, 0);
  color: white;
}
.ground {
  background-color: brown;
  color: white;
}
.fire {
  background-color: rgb(255, 8, 0);
  color: white;
}
.water {
  background-color: rgb(0, 80, 145);
  color: white;
}
.psychic {
  background-color: rgb(255, 52, 194);
  color: white;
}
.steel {
  background-color: rgb(161, 161, 161);
  color: white;
}
.rock {
  background-color: rgb(85, 30, 30);
  color: white;
}
.ice {
  background-color: rgb(139, 222, 255);
  color: black;
}
.fairy {
  background-color: rgb(182, 147, 207);
  color: white;
}
.fighting {
  background-color: orangered;
  color: white;
}
.ghost {
  background-color: rgb(141, 7, 134);
  color: white;
}
.dragon {
  background: rgb(255, 69, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 69, 0, 1) 40%,
    rgba(0, 212, 255, 1) 100%
  );
  color: white;
}
.dark {
  background-color: rgb(51, 51, 51);
  color: white;
}
.card-hover:hover {
  -webkit-box-shadow: 0px 5px 15px 10px #ffd700;
  box-shadow: 0px 5px 15px 10px #ffd700;
  transition: all 0.2s ease;
}
/* .card-hover:hover {
    animation: rotate-infinite 5s infinite alternate; 
}*/

/* @keyframes rotate-infinite {
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(360deg);
    }
} */
</style>
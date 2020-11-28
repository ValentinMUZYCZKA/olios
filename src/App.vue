<template>
  <div id="app">
    <div class="nav-left">
      <img class="nav-left__logo" src="assets/menu/logo@2x.png" alt="logo, a circle blue">
      <router-link to="/" class="nav-left__icone nav-left__icone--home">
        <img src="assets/menu/home.svg" alt="a house">
      </router-link> 
      <router-link to="/Basket" class="nav-left__icone">
        <img src="assets/menu/basket.svg" alt="a basket">
      </router-link>
      <router-link to="/Search" class="nav-left__icone">
        <img src="assets/menu/search.svg" alt="magnifiing glass">
      </router-link>
    </div>
    <div class="nav-right">
      <router-link to="/Accesories" class="nav-right__link nav-right__link--linving-room">Accesories</router-link>
      <router-link to="/ForKids" class="nav-right__link">ForKids</router-link>
      <router-link to="/Kitchen" class="nav-right__link">Kitchen</router-link>
      <router-link to="/LivingRoom" class="nav-right__link">LivingRoom</router-link>
      <router-link to="/Office" class="nav-right__link">Office</router-link>
      <router-link to="/Categories" class="nav-right__link nav-right__link--categories">Show all categories</router-link>
      <div class="categories-underligne"></div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
@import url('/css/reset.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Lato-Regular', sans-serif;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.28px;
  background-image: url('/assets/background.png');
  background-origin: border-box;
  background-position: bottom;
  background-repeat: no-repeat; 
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

.nav-left{
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  width: 94px;
  height: 100vh;
  align-items: center;
  background-color: #FFFFFF;

  &__logo{
    width: 27px;
    margin-top: 22px;
  }

  &__icone{
    margin-top: 55px;
    height: 21px;

    & > img{
      height: 100%;
    }
    &--home{
      margin-top: 100px;
    }
  }
  
}
.nav-right{
  position: absolute;
  max-width: 246px;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  display: flex;
  flex-flow: column;
  background-color: #FFFFFF;
  text-transform: uppercase;

  &__link{
    margin-top: 68px;
    text-align: right;
    margin-right: 110px;
    text-decoration: none;
    color: #C1C1C1;
    
    &--linving-room{
      margin-top: 273px;
    }
    &--categories{
      color: #0023FF;
      margin-top: 0;
      margin-bottom: 64px;
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
    }
  }
}
.categories-underligne{

}
</style>

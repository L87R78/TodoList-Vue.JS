<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

#app {
  max-width: 500px;
  margin: auto;
  font-family: 'Monda', sans-serif;
  .nav {
    ul {
      display: flex;
      justify-content: center;
      padding: 0;
      li {
        list-style: none;
        margin-right: 1rem;
        a {
          text-decoration: none;
          padding: 5px;
          &:hover {
            background: rgba(128, 128, 128, 0.308);
          }
          
        }
      }
    }
  }
}
</style>

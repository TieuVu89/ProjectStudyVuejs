<template>
  <div>
    <b-button v-b-toggle.sidebar-no-header class="btn-click">Menu</b-button>
    <b-sidebar id="sidebar-no-header"  aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template v-slot:default="{ hide }" >
        <div class="p-3">          
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item><router-link to='/home'>Home</router-link></b-nav-item>
              <b-nav-item><router-link to='/register'>Register</router-link></b-nav-item>
              <b-nav-item><router-link to='/login'>Login</router-link></b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close</b-button>
        </div>
      </template>
    </b-sidebar>
    <router-view />
  </div>
</template>
 

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn-click{
  float: left;
  margin-top: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 550px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      background-color: #f1f1f1;
      height: 100%;
    }
        
    /* On small screens, set height to 'auto' for the grid */
    @media screen and (max-width: 767px) {
      .row.content {height: auto;} 
    }
</style>

<template>
  <div>
    <sidebar>
      <template  >
        <div class="p-3">          
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item><router-link to='/computed'>Computed</router-link></b-nav-item>
              <b-nav-item><router-link to='/watch'>Watch</router-link></b-nav-item>
              <b-nav-item><router-link to='/binding'>Binding</router-link></b-nav-item>
            </b-nav>
          </nav>
          
        </div>
      </template>
    </sidebar>
    <router-view />
  </div>
</template>
 

<script>
export default {
 
  
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

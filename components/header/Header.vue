<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand"> conduit </NuxtLink>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <NuxtLink class="nav-link active" to="/"> Home </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/login"> Sign in </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/register"> Sign up </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

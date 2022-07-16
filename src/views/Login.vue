<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import HelloWorld from './../components/HelloWorld.vue';
import router from './../router';

const email = ref('');
const password = ref('');

const signin = function () {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log(data);
            router.push({ name: 'home' });
        })
        .catch(error => {
            console.log(error);
        });
}
</script>

<template>
  <HelloWorld />
    <main class="form-signin mt-3">
        <form onsubmit="event.preventDefault()">
            <div class="form-floating">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Email address" required autofocus>
            </div>
            <div class="form-floating mt-2">
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password" required>
            </div>
            <button class="btn btn-lg btn-primary btn-block mt-2" type="submit" v-on:click="signin">Connexion</button>
            <p class="mt-5 text-muted">&copy; 2022 - 2023</p>
            <p class="mt-1 text-muted">qqMelon</p>
        </form>
    </main>
</template>
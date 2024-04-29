<!-- Javascript -->
<template>
  <nav
    class="md:fixed top-0 w-full left-0 md:h-max h-full px-6 py-1 bg-white md:flex justify-between items-center border-b border-orange-400 bottom-1 z-50"
  >
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img src="@/assets/images/logo.jpeg" width="60" height="60" />
        <a class="max-w-[40vw] md:text-2xl font-semibold text-gray-900"
          >The Voice of Healthcare Africa</a
        >
      </div>

      <!-- Nav bar icon-->
      <span
        @click="menuOpen()"
        class="absolute md:hidden right-5 top-5 cursor-pointer text-5xl text-black"
      >
        <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
      </span>
    </div>

    <!-- Menu items -->
    <ul
      class="z-40 h-5/6 w-4/6 absolute flex flex-col md:flex-row items-center gap-6 md:gap-5 md:items-center px-6 md:px-0 pt-3 md:pt-0 pb-16 md:pb-0 md:static bg-white md:w-auto duration-700 ease-in text-2xl border-b md:border-none border-b-orange-500 rounded-br-xl"
      :class="[open ? 'left-0' : 'left-[-100%]']"
      id="navigation"
    >
      <li
        class="hover:text-orange-500 hover: hover:underline text-slate-900 w-[80%] text-center pb-1 font-bold"
        v-for="link in Links"
        :key="link.name"
      >
        <a :href="link.link">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<!-- Javascript -->
<script>
import { ref } from 'vue'

export default {
  setup() {
    let open = ref(false)
    let Links = [
      { name: 'Home', link: '/' },
      { name: 'Talks', link: '/talks' },
      { name: 'About', link: '/about' },
      { name: 'Contact', link: '/contact' }
    ]

    // change value for menu icon
    function menuOpen() {
      open.value = !open.value
    }

    return { Links, open, menuOpen }
  }
}
</script>

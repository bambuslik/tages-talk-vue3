import { ref, defineComponent } from 'vue'
import axios from 'axios'

import UserCard from '@/components/user-card/user-card.vue'
export default defineComponent({
  components: {
    UserCard
  },
  setup() {
    const cardsAxios = ref([])

    const getData = () => {
      console.log('axios fired')
      axios.get('https://reqres.in/api/users?page=2')
        .then((res: any) => {
          cardsAxios.value = res.data.data
        })
    }

    getData()

    return {
      getData,
      cardsAxios
    }
  }

})
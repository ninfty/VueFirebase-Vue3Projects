import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {

    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const res = await projectFirestore.collection('posts').get()
            
            posts.value = res.docs.map(doc => {
                //console.log(doc.data())
                return { ...doc.data(), id: doc.id }
            })

            // let data = await fetch('http://localhost:3000/posts')
            // if (!data.ok) {
            //     throw Error('no available data')
            // }
            // posts.value = await data.json()
        }
        catch (err) {
            error.value = err.message
        }
    }

    return { posts, error, load }
}

export default getPosts
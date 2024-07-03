const myApp= {
    data () {
        return{
            title: 'Curso de Vue 3',
            name: 'Allan',
            lastName: 'Queiroz',
            products : [
                {
                    title: 'Filme 01',
                    description: 'Donnie Darko',
                    image: './assets/images/filme01.jpg',
                    stars: '3.8'
                },
                {
                    title: 'Filme 02',
                    description: 'Clube da Luta',
                    image: './assets/images/filme02.jpg',
                    stars: '4.2'
                }
            ],
            cart: [],
            
            styles: {
                backgroundColor: '#000',
                color: '#fff', 
            },
            themeBlack: true

            }
            
        },

    computed: {
        fullName(){
            return this.name + ' ' + this.lastName
        }
    },    
    
    methods: {
        addCart(product) {
            this.cart.push(product) //acrescenta
        },
        inCart(product){
            return this.cart.indexOf(product) != -1 //passa o 1º produto adicionado (-1 = vazio)
        },
        removeCart(product){
            this.cart = this.cart.filter((prod, index) => {
                return product != prod
            })
        },
        toogleTheme () {
            this.themeBlack = !this.themeBlack

            if (this.themeBlack){
                this.styles.backgroundColor = '#000'
                this.styles.color = '#fff'
            }else {
                this.styles.backgroundColor = '#fff'
                this.styles.color = '#000'
            }
        }
    },

}

const app = Vue.createApp(myApp)

    
   
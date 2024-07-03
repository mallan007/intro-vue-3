const productDetail = {
    template: `
        <p>{{ product.title }}</p> 
        <img :src="product.image" :alt="product.title" style="max-width: 108px;"> <br>  
        {{ product.description }}
        <strong v-if="product.stars > 4"> {{ product.stars }} </strong> 

        <button @click.prevent="addCart(product)" 
            :disabled="productInCart" 
            :class="[ 'color', { 'button-disabled' : productInCart } ]">
            ADD CART 
        </button>
    `,

    emits: ['add-prod-cart'],

    // props: ['product', 'productInCart'],
    props: {
        product:{
            type: Object, 
            require: true,
            default: true
        },
        productInCart:{
            type: Boolean, 
            require: true,
        },
    },

    data() {
        return {
            example: 16,

        }
    },

    methods: {
        addCart (product){
            console.log('Add cart in component'),
            this.$emit('add-prod-cart', product)
        }
    },

}

app.component('product-detail', productDetail)  // Registrando o componente


(() => {

  interface Product {
    id: number;
    name: string;
  }

  // al agregar los servicios separados de la clase se amolda mucho mas 
  // a cambios ejemplo cambiar el api, la logica de guardado etc
  class ProductService {
    getProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log('Producto: ', { id, name: 'OLED Tv' });
    }
    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos 
      console.log('Guardando en base de datos', product);
    }
  }

  class Mailer {
    private masterEmail: string = 'javier@google.com'

    sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
      console.log('Enviando correo', template, emailList);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    // injectando las dependencias es mas facil probar la clase ya que podemos
    // crear un mock de las dependencias para las pruebas
    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id)
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product)
    }

    notifyClients() {
      this.mailer.sendEmail(['fernando@herrera.com'], 'to-clients')
    }

  }

  // al manejar el carrito en una clase separada es mas facil hacer cambios
  class CartBloc {
    private items: Object[] = [];

    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log('Agregando al carrito ', productId);
      this.items.push(productId)
    }
  }

  const productService = new ProductService()
  const mailer = new Mailer()

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();

  cartBloc.addToCart(10);








})();
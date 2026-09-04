export const products = [
    {
        id: 1,
        name: 'ESP32 DevKit V1',
        category: 'Microcontroladores',
        price: 65,
        stock: 10,

        image: '/images/esp32/esp32.jpg',

        images: [
            '/images/esp32/esp32.jpg',
            '/images/esp32/esp32-pines.jpeg',
            '/images/esp32/esp32-dimensions.jpg',
            '/images/esp32/detail.jpg'
        ],

        description:
            'Placa de desarrollo basada en ESP32 con WiFi y Bluetooth.',

        specifications: {
            'Microcontrolador': 'ESP32',
            'WiFi': '802.11 b/g/n',
            'Bluetooth': 'Bluetooth 4.2 / BLE',
            'GPIO': '34',
            'Voltaje': '3.3 V',
            'Flash': '4 MB'
        },

        projects: [
            'Proyectos IoT',
            'Automatización del hogar',
            'Monitoreo de sensores',
            'Robótica',
            'Control remoto mediante WiFi'
        ],

        featured: true
    },

    {
        id: 2,
        name: 'Arduino UNO R3',
        category: 'Microcontroladores',
        price: 85,
        stock: 8,

        image: '/images/products/arduino/main.jpg',

        images: [
            '/images/arduino/main.jpg',
            '/images/arduino/front.jpg',
            '/images/arduino/back.jpg',
            '/images/arduino/detail.jpg'
        ],

        description:
            'Placa Arduino UNO R3 para proyectos de electrónica y control.',

        specifications: {
            'Microcontrolador': 'ATmega328P',
            'Voltaje': '5 V',
            'Digital I/O': '14',
            'Analog I/O': '6',
            'Flash': '32 KB',
            'Comunicación': 'USB / Serial'
        },

        projects: [
            'Robótica educativa',
            'Automatización',
            'Control de motores',
            'Proyectos de sensores',
            'Prototipos electrónicos'
        ],

        featured: true
    },

    {
    id: 3,
    name: 'HC-SR04',
    category: 'Sensores',
    price: 18,
    stock: 20,
    image: [
        '/images/hc-sr04.jpg',
    ],
    description: 'Sensor ultrasónico para medición de distancia.',
    featured: true
  },

  {
    id: 4,
    name: 'DHT22',
    category: 'Sensores',
    price: 35,
    stock: 12,
    image: '/images/dht22.jpg',
    description: 'Sensor digital de temperatura y humedad.',
    featured: true
  },

  {
    id: 5,
    name: 'MPU6050',
    category: 'Sensores',
    price: 28,
    stock: 15,
    image: '/images/mpu6050.jpg',
    description: 'Acelerómetro y giroscopio de 6 ejes.',
    featured: false
  },

  {
    id: 6,
    name: 'DRV8825',
    category: 'Drivers',
    price: 32,
    stock: 10,
    image: '/images/drv8825.jpg',
    description: 'Driver para motores paso a paso.',
    featured: false
  },

  {
    id: 7,
    name: 'OLED 0.96" I2C',
    category: 'Displays',
    price: 30,
    stock: 10,
    image: '/images/oled.jpg',
    description: 'Pantalla OLED de 0.96 pulgadas con interfaz I2C.',
    featured: false
  },

  {
    id: 8,
    name: 'Módulo Relé 1 Canal',
    category: 'Módulos',
    price: 15,
    stock: 25,
    image: '/images/rele.jpg',
    description: 'Módulo relé de un canal para control de cargas.',
    featured: false
  }
]
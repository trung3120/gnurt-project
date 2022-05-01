const product_01_image_01 = require('../images/products/product-01 (1).png').default
const product_01_image_02 = require('../images/products/product-01 (2).png').default
const product_01_image_03 = require('../images/products/product-01 (3).png').default

const product_02_image_01 = require('../images/products/product-02 (1).png').default
const product_02_image_02 = require('../images/products/product-02 (2).png').default
const product_02_image_03 = require('../images/products/product-02 (3).png').default
const product_02_image_04 = require('../images/products/product-02 (4).png').default

const product_03_image_01 = require('../images/products/product-03 (1).png').default
const product_03_image_02 = require('../images/products/product-03 (2).png').default
const product_03_image_03 = require('../images/products/product-03 (3).png').default
const product_03_image_04 = require('../images/products/product-03 (4).png').default

const product_04_image_01 = require('../images/products/product-04 (1).png').default
const product_04_image_02 = require('../images/products/product-04 (2).png').default
const product_04_image_03 = require('../images/products/product-04 (3).png').default
const product_04_image_04 = require('../images/products/product-04 (4).png').default
const product_04_image_05 = require('../images/products/product-04 (5).png').default

const product_05_image_01 = require('../images/products/product-05 (1).png').default
const product_05_image_02 = require('../images/products/product-05 (2).png').default

const product_06_image_01 = require('../images/products/product-06 (1).png').default
const product_06_image_02 = require('../images/products/product-06 (2).png').default
const product_06_image_03 = require('../images/products/product-06 (3).png').default
const product_06_image_04 = require('../images/products/product-06 (4).png').default

const product_07_image_01 = require('../images/products/product-07 (1).png').default
const product_07_image_02 = require('../images/products/product-07 (2).png').default
const product_07_image_03 = require('../images/products/product-07 (3).png').default
const product_07_image_04 = require('../images/products/product-07 (4).png').default
const product_07_image_05 = require('../images/products/product-07 (5).png').default

const product_08_image_01 = require('../images/products/product-08 (1).png').default
const product_08_image_02 = require('../images/products/product-08 (2).png').default
const product_08_image_03 = require('../images/products/product-08 (3).png').default
const product_08_image_04 = require('../images/products/product-08 (4).png').default

const product_09_image_01 = require('../images/products/product-09 (1).png').default
const product_09_image_02 = require('../images/products/product-09 (2).png').default
const product_09_image_03 = require('../images/products/product-09 (3).png').default
const product_09_image_04 = require('../images/products/product-09 (4).png').default
const product_09_image_05 = require('../images/products/product-09 (5).png').default

const product_10_image_01 = require('../images/products/product-10 (1).png').default
const product_10_image_02 = require('../images/products/product-10 (2).png').default
const product_10_image_03 = require('../images/products/product-10 (3).png').default
const product_10_image_04 = require('../images/products/product-10 (4).png').default

const products = [
    {
        title: "PRESIDENT",
        price: '3800000000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        categorySlug: "Vinfast",
        colors: ["metal", "black", "red"],
        slug: "president",
        furniture: ["black"],
        description: "President là mẫu xe SUV hạng sang cỡ lớn do VinFast thuộc Tập đoàn Vingroup sản xuất và bán ra thị trường từ ngày 7 tháng 9 năm 2020. Đây là mẫu ô tô thứ 4 được VinFast giới thiệu, sau VinFast Fadil , LUX A2.0 và LUX SA2.0 . Phiên bản tiền concept VinFast LUX V8 đã được giới thiệu tại Geneva Motor Show 2019"
    },
    {
        title: "LUX SA2.0",
        price: '1221000000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        image03: product_02_image_03,
        image04: product_02_image_04,
        categorySlug: "Vinfast",
        colors: ["white", "grey", "black", "silver"],
        slug: "lux-sa20",
        furniture: ["brown", "black"],
        description: "LUX SA2.0 là mẫu xe SUV hạng sang cỡ trung 5 + 2 chỗ ngồi được hãng xe Việt Nam VinFast sản xuất từ năm 2019. Xe được ra mắt tại Paris Motor Show 2018 "
    },
    {
        title: "LUX A2.0",
        price: '681695000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        image03: product_03_image_03,
        image04: product_03_image_04,
        categorySlug: "Vinfast",
        colors: ["white", "grey", "black", "silver"],
        slug: "lux-a20",
        furniture: ["white", "beige"],
        description: "Sự kết hợp giữa dáng vẻ khỏe khoắn và cấu trúc hoàn hảo của ngoại thất tạo nên điểm nhấn sang trọng nhưng vẫn đầy tinh tế cho LUX A2.0, thổi làn gió mới vào thiết kế đặc hữu của dòng sedan thông thường."
    },
    {
        title: "VF e34",
        price: '690000000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        image03: product_04_image_03,
        image04: product_04_image_04,
        image05: product_04_image_05,
        categorySlug: "Vinfast",
        colors: ["black", "silver", "blue", "white", "red"],
        slug: "vf-e34",
        furniture: ["white", "brown", "black", "beige"],
        description: "VF e34 là mẫu xe crossover SUV cỡ nhỏ chạy điện do VinFast thuộc Tập đoàn Vingroup sản xuất và bán ra thị trường từ năm 2021"
    },
    {
        title: "Audi A3",
        price: '1520000000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "Audi",
        colors: ["white", "blue", "silver", "black"],
        slug: "audi3",
        furniture: ["black", "beige"],
        description: "Audi A3 2022 là mẫu xe được kết hợp hài hòa giữa quá khứ và hiện đại khi mang nét đẹp cổ điển cùng sự trẻ trung, hiện đại để phù hợp đối tượng trẻ tuổi. Có thể nói Audi A3 là mẫu xe kinh điển khi mang ngoại hình thể thao mạnh mẽ, sang trọng nhưng vẫn tinh tế."
    },
    {
        title: "Honda Civic",
        price: '730000000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        image03: product_06_image_03,
        image04: product_06_image_04,
        categorySlug: "Honda",
        colors: ["red", "metal", "silver", "white"],
        slug: "honda-civic",
        furniture: ["brown", "black"],
        description: "Honda Civic 2022 được thiết kế mới hoàn toàn, không còn các đường nét mang dáng dấp thể thao – góc cạnh từ thế hệ Gens 10. Chiếc xe mang phong cách nhã nhặn, gọn gàng hơn do các bề mặt được gọt dũa kỹ càng, bo tròn, qua đó tạo nên dáng vẻ chín chắn, đứng đắn hơn .Nhờ đó, xe có thể tiếp cận nhiều đối tượng khách hàng lớn tuổi hơn."
    },
    {
        title: "Mazda 3",
        price: '719000000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        image03: product_07_image_03,
        image04: product_07_image_04,
        image05: product_07_image_05,
        categorySlug: "Mazda",
        colors: ["white", "red", "black", "silver", "grey"],
        slug: "mazda3",
        furniture: ["beige", "black"],
        description: "Mazda 3 là mẫu sedan hạng C nổi bật và ăn khách tại thị trường Việt Nam. Dù phải cạnh tranh với những tên tuổi đình đám như KIA K3 (Cerato), Hyundai Elantra hay Toyota Corolla Altis nhưng Mazda 3 vẫn chinh phục khách hàng trong nước bởi những ưu điểm vượt trội về thiết kế hiện đại, nhiều trang bị tiện nghi và giá thành hợp lý."
    },
    {
        title: "Hyundai Elantra",
        price: '580000000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        image03: product_08_image_03,
        image04: product_08_image_04,
        categorySlug: "Hyundai",
        colors: ["red", "silver", "black", "white"],
        slug: "hyundai-elantra",
        furniture: ["black"],
        description: "Hyundai Elantra ra mắt toàn cầu lần đầu tiên vào năm 1990. Hiện nay xe đang ở vòng đời thứ 7, được ra mắt vào tháng 03/2020 tại Mỹ. Đây là dòng sedan nhỏ gọn được bán ở nhiều nước với nhiều tiên gọi khác nhau. Tại Việt Nam, Hyundai Elantra đang là bản nâng cấp giữa vòng đời của thế hệ thứ 6, ra mắt người tiêu dùng hồi tháng 05/2019. Tham chiến tại phân khúc sedan C với loạt những cái tên như Kia Cerato, Mazda3, Toyota Corolla Altis, giá xe Hyundai Elantra được cho là khá cạnh tranh khi chỉ nhỉnh hơn đối thủ đồng hương Cerato và thấp hơn hẳn các mẫu xe Nhật."
    },
    {
        title: "Nissan LEAF",
        price: '720000000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        image03: product_09_image_03,
        image04: product_09_image_04,
        image05: product_09_image_05,
        categorySlug: "Nissan",
        colors: ["silver", "metal", "blue", "red", "black"],
        slug: "nissan-leaf",
        furniture: ["beige"],
        description: "Chiếc Nissan Leaf thế hệ thứ 2 đánh vào thị yếu rộng rãi về khả năng sử dụng, khả năng yêu thích và khả năng chi trả. Bây giờ cũng có thể có thêm sự bổ sung về phạm vi di chuyển."
    },
    {
        title: "Nissan Sentra",
        price: '470000000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        image03: product_10_image_03,
        image04: product_10_image_04,
        categorySlug: "Nissan",
        colors: ["white", "silver", "metal", "black"],
        slug: "nissan-sentra",
        furniture: ["brown"],
        description: "Nissan Sentra được đầu tư trang bị toàn diện về nội và ngoại thất cùng toàn bộ tính năng tiện nghi hiện đại. Sentra được đánh giá là một trong những dòng xe Sedan có hiệu suất cao nhất của hãng Nissan. Với dáng vẻ thể thao, động cơ tăng áp năng động mang lại sự vận hành mạnh mẽ giúp người dùng trải nghiệm sức mạnh năng động thực  sự khác biệt so với các dòng xe trong tầm giá."
    },
    {
        title: "Volkswagen Golf GTI",
        price: '789000000',
        image01: product_08_image_02,
        image02: product_08_image_04,
        image03: product_08_image_03,
        image04: product_08_image_01,
        categorySlug: "Volkswagen",
        colors: ["red", "silver", "black", "white"],
        slug: "volkswagen-golf-gti",
        furniture: ["white", "black"],
        description: "Thương hiệu Volkswagen vừa chính thức cho ra mắt mẫu xe Golf GTI 2022 với 3 phiên bản là S, SE và Autobahn tại Triển lãm Ô tô Chicago 2021. Đây chính là mẫu xe được phát triển dựa trên Volkswagen Golf thế hệ thứ 8 (Mk8), tuy nhiên GTI 2022 vẫn có một số đặc điểm riêng như đèn sương mù hình chữ 'X' trên cản trước và lưới tản nhiệt dưới với mắt lưới hình tổ ong, được thiết kế hẹp với đường kẻ nằm ngang màu đỏ. Thêm vào đó là cụm phanh màu đỏ và 2 ống xả phía sau."
    },
    {
        title: "MG5",
        price: '579000000',
        image01: product_06_image_02,
        image02: product_06_image_01,
        image03: product_06_image_03,
        image04: product_06_image_04,
        categorySlug: "MG",
        colors: ["red", "metal", "silver", "white"],
        slug: "mg5",
        furniture: ["black"],
        description: "Xe ô tô MG5 2022 là dòng xe vừa được hãng xe của Anh giới thiệu đến với thị trường Việt Nam đóng góp vào danh sách sản phẩm khá ít ỏi của mình tại Việt Nam. Đến với thị trường Việt Nam MG5 2022 được định vị tại phân khúc sedan hạng C cạnh tranh cùng với những cái tên quen thuộc trong phân khúc như: KIA K3, Mazda 3, Hyundai Elantra, Honda Civic,..."
    },
    {
        title: "Mitsubishi Xpander 2022",
        price: '340000000',
        image01: product_03_image_03,
        image02: product_03_image_01,
        categorySlug: "Mitsubishi",
        colors: ["black", "white"],
        slug: "mitsubishi-xpander-2022",
        furniture: ["brown", "black"],
        description: "Mitsubishi Xpander 2022 theo thông tin đã có mặt tại Việt Nam khi dán biển số tạm T60 lăn bánh và được che logo. Tuy nhiên không khó khăn để nhìn thấy đây là chiếc Xpander làm mưa làm gió trong những năm vừa qua lại có thiết kế mới sẽ được bán tại Việt Nam trong thời gian tới."
    },
    {
        title: "Toyota Corolla Altis",
        price: '765000000',
        image01: product_09_image_04,
        image02: product_09_image_02,
        image03: product_09_image_03,
        image04: product_09_image_01,
        image05: product_09_image_05,
        categorySlug: "Toyota",
        colors: ["red", "metal", "blue", "silver", "black"],
        slug: "toyota-corolla-altis",
        furniture: ["beige", "black"],
        description: "Toyota Corolla Altis 2022 tiếp nối thành công của người tiền nhiệm với nhiều lột xác về ngoại hình, trang bị an toàn, công nghệ hiện đại và sự bổ sung thiết thực khi có thêm phiên bản hybrid."
    },
    {
        title: "Kia Telluride",
        price: '869170000',
        image01: product_07_image_04,
        image02: product_07_image_03,
        image03: product_07_image_01,
        categorySlug: "Kia",
        colors: ["black", "silver", "white"],
        slug: "kia-telluride",
        furniture: ["beige"],
        description: "Kia Telluride 2023 là mẫu SUV 7-8 chỗ được sản xuất bởi hãng xe KIA - Hàn Quốc. Thế hệ mới nhất của Kia Telluride 2023 vừa được ra mắt tại triển lãm xe ô tô New York 2022. "
    },
    {
        title: "Ford Territory",
        price: '700000000',
        image01: product_08_image_03,
        image02: product_08_image_02,
        image03: product_08_image_01,
        image04: product_08_image_04,
        categorySlug: "Ford",
        colors: ["black", "silver", "white", "red"],
        slug: "ford-territory",
        furniture: ["brown", "black"],
        description: "Ford Territory 2022 là sản phẩm hợp tác giữa Ford và JMC (Trung Quốc), được giới thiệu vào năm 2018. Hai năm sau xe được bán ra tại các thị thường Nam Mỹ, Trung Quốc và Philippines."
    },
    {
        title: "FADIL",
        price: '382500000',
        image01: product_03_image_04,
        image02: product_03_image_02,
        image03: product_03_image_01,
        categorySlug: "Vinfast",
        colors: ["silver", "grey", "white"],
        slug: "fadil",
        furniture: ["brown"],
        description: "VinFast Fadil phiên bản tiêu chuẩn (Base) hiện đang là phiên bản bán chạy nhất của dòng xe cỡ nhỏ VinFast Fadil nhờ giá bán cạnh tranh, động cơ vận hành vượt trội, trang bị tiện nghi và an toàn."
    },
    {
        title: "Toyota Prius Prime",
        price: '649060000',
        image01: product_07_image_05,
        image02: product_07_image_04,
        image03: product_07_image_03,
        image04: product_07_image_02,
        image05: product_07_image_01,
        categorySlug: "Toyota",
        colors: ["grey", "silver", "black", "red", "white"],
        slug: "toyota-prius-prime",
        furniture: ["brown", "black"],
        description: "Thế hệ thứ hai của phiên bản plug-in hybrid của Prius, được gọi là Toyota Prius Prime ở Mỹ và Prius PHV ở Nhật, [88] được phát triển song song với mẫu Prius thế hệ thứ tư tiêu chuẩn (XW50) được phát hành vào tháng 12 năm 2015. [ 89] Mẫu xe được phát hành cho khách hàng bán lẻ ở Mỹ vào tháng 11 năm 2016, [13] tiếp theo là Nhật Bản vào tháng 2 năm 2017. [84] Tại thị trường Mỹ, không giống như mẫu xe thế hệ đầu tiên, Prius Prime sẽ có mặt ở tất cả 50 bang. . [89] [90] Doanh số toàn cầu cộng dồn của cả hai thế hệ plug-in Prius đạt tổng cộng 79.300 chiếc vào cuối tháng 1 năm 2017. [12]Mỹ là thị trường bán chạy nhất, với 46.133 chiếc được bán ra kể từ khi thành lập đến tháng 1 năm 2017, trong đó, 3.788 chiếc là xe Prius Prime thế hệ thứ hai."
    },
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData
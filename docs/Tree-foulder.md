# 1. Event-Driven Architecture (EDA)

Node.js:

- src/
  - events/
    - eventHandlers/
      - UserCreatedHandler.js
      - OrderPlacedHandler.js
    - eventEmitters/
      - UserEvents.js
      - OrderEvents.js
  - services/
    - userService.js
    - orderService.js
  - models/
    - User.js
    - Order.js
  - repositories/
    - userRepository.js
    - orderRepository.js
  - controllers/
    - userController.js
    - orderController.js
  - utils/
    - eventBus.js
    - logger.js
  - configs/
    - config.js
  - routes/
    - userRoutes.js
    - orderRoutes.js
- index.js

ASP.NET Core MVC:

- src/
  - Events/
    - EventHandlers/
      - UserCreatedHandler.cs
      - OrderPlacedHandler.cs
    - EventEmitters/
      - UserEvents.cs
      - OrderEvents.cs
  - Services/
    - UserService.cs
    - OrderService.cs
  - Models/
    - User.cs
    - Order.cs
  - Repositories/
    - UserRepository.cs
    - OrderRepository.cs
  - Controllers/
    - UserController.cs
    - OrderController.cs
  - Utils/
    - EventBus.cs
    - Logger.cs
  - Configs/
    - AppSettings.json
  - Routes/
    - Startup.cs
- Program.cs

# 2. Domain-Driven Design (DDD)

Node.js:

- src/
  - domains/
    - user/
      - UserService.js
      - UserModel.js
      - UserRepository.js
      - UserController.js
      - UserEvents.js
      - UserFactory.js
      - UserValueObjects.js
    - order/
      - OrderService.js
      - OrderModel.js
      - OrderRepository.js
      - OrderController.js
      - OrderEvents.js
      - OrderFactory.js
      - OrderValueObjects.js
  - shared/
    - Kernel/
      - EventBus.js
      - Logger.js
      - Config.js
    - Infrastructure/
      - Database/
        - MongoDB.js
        - SQL.js
      - Messaging/
        - RabbitMQ.js
        - Kafka.js
    - Utils/
      - HelperFunctions.js
  - routes/
    - index.js
- index.js

ASP.NET Core MVC:

- src/
  - Domains/
    - User/
      - Services/
        - UserService.cs
      - Models/
        - User.cs
      - Repositories/
        - UserRepository.cs
      - Controllers/
        - UserController.cs
      - Events/
        - UserEvents.cs
      - Factories/
        - UserFactory.cs
      - ValueObjects/
        - UserValueObjects.cs
    - Order/
      - Services/
        - OrderService.cs
      - Models/
        - Order.cs
      - Repositories/
        - OrderRepository.cs
      - Controllers/
        - OrderController.cs
      - Events/
        - OrderEvents.cs
      - Factories/
        - OrderFactory.cs
      - ValueObjects/
        - OrderValueObjects.cs
  - Shared/
    - Kernel/
      - EventBus.cs
      - Logger.cs
      - AppSettings.json
    - Infrastructure/
      - Database/
        - MongoDBContext.cs
        - SQLContext.cs
      - Messaging/
        - RabbitMQ.cs
        - Kafka.cs
    - Utils/
      - HelperFunctions.cs
  - Routes/
    - Startup.cs
- Program.cs

## Event-Driven Architecture (EDA)

- Thư mục events/ chứa các event handlers và event emitters.
- Các service sẽ tương tác với event bus để phát ra hoặc xử lý sự kiện.
- Cấu trúc tập trung vào cách các sự kiện được phát ra và xử lý xuyên suốt ứng dụng.

## Domain-Driven Design (DDD)

- Mỗi domain có thư mục riêng, chứa tất cả các phần tử liên quan như services, models, repositories, events, factories, và value objects.
- Shared/ chứa các phần chung giữa các domain như event bus, logging, infrastructure.
- Cấu trúc tập trung vào việc phản ánh các lĩnh vực kinh doanh của ứng dụng trong mã nguồn.

## 3. MVC (Model-View-Controller)

### NodeJs

- Model (M): Quản lý dữ liệu và logic kinh doanh của ứng dụng.
- View (V): Quản lý việc hiển thị dữ liệu cho người dùng (trong trường hợp backend API, View có thể là dữ liệu JSON mà API trả về).
- Controller (C): Nhận và xử lý các yêu cầu từ người dùng, tương tác với Model và trả về dữ liệu cho View.

- /project-root
- │
- ├── /controllers      # Thư mục chứa các controller
- │   ├── user.controller.js
- │   └── auth.controller.js
- │
- ├── /models           # Thư mục chứa các model
- │   ├── user.model.js
- │   └── product.model.js
- │
- ├── /routes           # Thư mục chứa các route (định tuyến)
- │   ├── user.routes.js
- │   └── auth.routes.js
- │
- ├── /views            # Thư mục chứa các view (đối với ứng dụng trả về HTML)
- │   └── index.ejs
- │
- ├── /middlewares      # Thư mục chứa các middleware
- │   └── auth.middleware.js
- │
- ├── /services         # Thư mục chứa các logic nghiệp vụ độc lập với controller
- │   └── user.service.js
- │
- ├── /config           # Thư mục chứa các cấu hình của ứng dụng (ví dụ: cấu hình database)
- │   └── database.config.js
- │
- ├── /helpers          # Thư mục chứa các helper function, utility function
- │   └── hash.helper.js
- │
- ├── /public           # Thư mục chứa các file tĩnh (hình ảnh, CSS, JS)
- │   └── styles.css
- │
- ├── /tests            # Thư mục chứa các test cases
- │   └── user.test.js
- │
- ├── app.js            # File chính của ứng dụng, khởi tạo server
- ├── package.json      # File cấu hình của Node.js (chứa thông tin về các dependencies)
- └── README.md         # Tài liệu của dự án

### ASP.NET core

- /project-root
- │
- ├── /Controllers      # Thư mục chứa các controller
- │   ├── HomeController.cs
- │   ├── AccountController.cs
- │   └── ProductController.cs
- │
- ├── /Models           # Thư mục chứa các model
- │   ├── User.cs
- │   ├── Product.cs
- │   └── Order.cs
- │
- ├── /Views            # Thư mục chứa các view
- │   ├── /Home
- │   │   ├── Index.cshtml
- │   │   └── About.cshtml
- │   ├── /Account
- │   │   ├── Login.cshtml
- │   │   └── Register.cshtml
- │   └── /Product
- │       ├── Index.cshtml
- │       └── Details.cshtml
- │
- ├── /wwwroot          # Thư mục chứa các file tĩnh (CSS, JS, hình ảnh)
- │   ├── /css
- │   │   └── site.css
- │   ├── /js
- │   │   └── site.js
- │   └── /images
- │       └── logo.png
- │
- ├── /Services         # Thư mục chứa các logic nghiệp vụ
- │   ├── UserService.cs
- │   ├── ProductService.cs
- │   └── EmailService.cs
- │
- ├── /Data             # Thư mục chứa các lớp quản lý dữ liệu, như DbContext
- │   └── ApplicationDbContext.cs
- │
- ├── /Migrations       # Thư mục chứa các file migration (EF Core)
- │   ├── 20220801120000_InitialCreate.cs
- │   └── ApplicationDbContextModelSnapshot.cs
- │
- ├── /Helpers          # Thư mục chứa các helper function, utility function
- │   └── PasswordHasher.cs
- │
- ├── /Middlewares      # Thư mục chứa các custom middleware
- │   └── RequestLoggingMiddleware.cs
- │
- ├── /ViewModels       # Thư mục chứa các view models
- │   ├── LoginViewModel.cs
- │   ├── RegisterViewModel.cs
- │   └── ProductViewModel.cs
- │
- ├── /Configuration    # Thư mục chứa các file cấu hình
- │   ├── AutoMapperProfile.cs
- │   └── Startup.cs
- │
- ├── Program.cs        # File khởi động ứng dụng
- ├── appsettings.json  # File cấu hình ứng dụng (kết nối CSDL, API keys,...)
- ├── Startup.cs        # File cấu hình các dịch vụ và pipeline của ứng dụng
- └── .csproj           # File cấu hình dự án

# ReactJS

public/:

- index.html: Tệp HTML chính.
- favicon.ico: Biểu tượng hiển thị trên tab trình duyệt.
- manifest.json: Cung cấp siêu dữ liệu được sử dụng khi ứng dụng web của bạn được cài đặt trên thiết bị của người dùng.
src/:
- assets/: Chứa các tài nguyên tĩnh như hình ảnh, phông chữ, và icon.
- components/: Các component UI người dùng tái sử dụng như nút, biểu mẫu, và thẻ.
- config/: Các tệp cấu hình cho các môi trường khác nhau (ví dụ: API endpoints, environment variables).
- context/: Quản lý các states.
- hooks/: Các hook tùy chỉnh để tái sử dụng logic giữa các component.
- pages/: Các trang hoặc giao diện chính của ứng dụng.
- routes/: Các router điều hướng trang.
- services/: API call hoặc services tương tác với hệ thống backend.
- store/: quản lý các states như Redux, zudstand.
- styles/: Các stylesheet toàn cầu, mô-đun CSS, hoặc các tệp SCSS.
- utils/: Các hàm tiện ích và helper method.
- App.js: Thành phần chính bao bọc toàn bộ ứng dụng.
package.json: Chứa các dependencies của dự án, các script, scripts, and metadata.
.gitignore:Chỉ định các tệp và thư mục nên được Git bỏ qua.

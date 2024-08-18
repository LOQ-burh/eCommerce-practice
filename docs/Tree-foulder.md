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

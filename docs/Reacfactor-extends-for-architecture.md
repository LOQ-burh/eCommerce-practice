# Kiến trúc ban đầu

## Layered Architecture

* auth: Quản lý xác thực và ủy quyền.
* configs: Chứa các tệp cấu hình cho ứng dụng.
* controllers: Xử lý các yêu cầu từ phía client và điều phối logic ứng dụng.
* core: Thường chứa các thành phần lõi, có thể bao gồm các dịch vụ hoặc logic chung của ứng dụng.
* databases: Kết nối và tương tác với cơ sở dữ liệu.
* helpers: Các hàm tiện ích, hỗ trợ cho các phần khác trong ứng dụng.
* models: Định nghĩa các mô hình dữ liệu, kết nối trực tiếp với cơ sở dữ liệu.
* postman: Chứa các tệp Postman để kiểm tra API.
* routes: Định nghĩa các đường dẫn (routes) và ánh xạ chúng tới các controller.
* services: Cung cấp các dịch vụ kinh doanh (business services) cho ứng dụng.
* utils: Chứa các tiện ích hoặc thư viện nhỏ không thuộc vào bất kỳ layer nào.

* Dễ bảo trì, dễ mở rộng khi mỗi phần được tách riêng biệt và có thể phát triển độc lập.

# Tài liệu tham khảo

## Mục đích

* Tập trung vào cách hệ thống phản ứng lại các sự kiện (events) xảy ra trong ứng dụng.
EDA giúp xây dựng các hệ thống linh hoạt, dễ mở rộng bằng cách sử dụng các sự kiện để truyền tải thông tin giữa các thành phần trong hệ thống.

* Các thành phần trong EDA hoạt động dựa trên các sự kiện và thường được xây dựng để phản ứng với các sự kiện mà không cần biết trước nguồn gốc của chúng.

Domain-Driven Design (DDD):

* Tập trung vào việc mô hình hóa nghiệp vụ và các khái niệm trong một lĩnh vực cụ thể (domain).
* DDD giúp các nhà phát triển hiểu rõ nghiệp vụ, tập trung vào việc tạo ra các mô hình phần mềm phản ánh chính xác các khái niệm và quy tắc của domain.
* Các yếu tố chính trong DDD bao gồm các khái niệm như Entities, Value Objects, Aggregates, Repositories, và Services, tất cả đều được tổ chức xoay quanh một domain cụ thể.

## Phương pháp tiếp cận

Event-Driven Architecture (EDA):

* Events là trung tâm: EDA dựa trên các sự kiện để kích hoạt và kết nối các thành phần trong hệ thống.
* Asynchronous Communication: Các thành phần trong EDA thường giao tiếp không đồng bộ, thông qua các cơ chế như message queues, event streams.
* Loosely Coupled Components: Các thành phần không cần biết về nhau mà chỉ cần biết về các sự kiện mà chúng có thể phát sinh hoặc lắng nghe.

Domain-Driven Design (DDD):

* Domain Modeling là trung tâm: Tập trung vào việc hiểu và mô hình hóa domain thông qua các khái niệm và thuật ngữ của nghiệp vụ.
* Bounded Contexts: DDD sử dụng các bounded contexts để giới hạn phạm vi của một domain, cho phép các đội phát triển tập trung vào một phần cụ thể của hệ thống.
* Ubiquitous Language: DDD khuyến khích sử dụng một ngôn ngữ chung giữa các bên liên quan (developer, business analyst, khách hàng) để đảm bảo sự hiểu biết thống nhất về domain.

## Cấu trúc

Event-Driven Architecture (EDA):

* Producers and Consumers: Các thành phần có thể là nhà sản xuất (producers) hoặc người tiêu dùng (consumers) của các sự kiện.
* Event Handlers: Xử lý các sự kiện khi chúng xảy ra và thực hiện các hành động tương ứng.
* Event Bus/Broker: Một thành phần trung gian có thể được sử dụng để phân phối các sự kiện đến các thành phần khác trong hệ thống.
Domain-Driven Design (DDD):

* Entities, Value Objects, Aggregates: Các mô hình domain được xây dựng từ các thành phần này, chúng phản ánh các khái niệm và mối quan hệ trong domain.
* Repositories: Được sử dụng để quản lý sự tồn tại của các Entities, cho phép lưu trữ và truy xuất chúng từ cơ sở dữ liệu.
* Domain Events: Trong DDD, các sự kiện liên quan đến domain cũng có thể được sử dụng để phản ánh các thay đổi quan trọng trong domain.

## Ứng dụng

Event-Driven Architecture (EDA):

* Thích hợp cho các hệ thống phân tán, yêu cầu xử lý theo thời gian thực hoặc cần phản ứng nhanh với các thay đổi.
* Phổ biến trong các hệ thống cần mở rộng dễ dàng, như microservices, các hệ thống xử lý giao dịch tài chính, hoặc các nền tảng IoT.
Domain-Driven Design (DDD):

* Phù hợp cho các hệ thống phức tạp, nơi nghiệp vụ là trọng tâm và cần sự chính xác trong mô hình hóa domain.
Được sử dụng trong các hệ thống quản lý, ERP, các hệ thống xử lý nghiệp vụ chuyên sâu.

## Kết hợp

Sự kết hợp giữa EDA và DDD:

* Event-Driven Domain Events: Trong DDD, bạn có thể sử dụng các event-driven domain events để phản ánh các thay đổi trong domain và kích hoạt các hành động khác trong hệ thống.
* Bounded Contexts có thể được liên kết với nhau thông qua các sự kiện, giúp duy trì tính toàn vẹn của dữ liệu và đồng bộ hóa giữa các phần của hệ thống.
Kết hợp EDA và DDD có thể giúp xây dựng các hệ thống vừa phản ứng nhanh, vừa mô hình hóa chính xác nghiệp vụ.
* Tóm lại, EDA và DDD có thể được sử dụng riêng biệt hoặc kết hợp tùy thuộc vào yêu cầu cụ thể của hệ thống. EDA tập trung vào sự kiện và phản ứng, trong khi DDD tập trung vào việc hiểu và mô hình hóa domain nghiệp vụ.

# Tích hợp apache kafka vào kiến trúc

Khi áp dụng Apache Kafka vào Event-Driven Architecture (EDA) và Domain-Driven Design (DDD), cả hai kiến trúc đều tận dụng khả năng của Kafka để quản lý và xử lý sự kiện, nhưng cách thức tích hợp và tổ chức codebase có thể khác nhau. Dưới đây là sự khác biệt và cách Kafka có thể ảnh hưởng đến hai kiến trúc này.

## 1. Event-Driven Architecture (EDA) với Apache Kafka
Tích hợp Kafka:

Kafka như một Event Bus chính: Kafka đóng vai trò là trung tâm giao tiếp giữa các dịch vụ và thành phần trong hệ thống. Các sự kiện được phát ra bởi các dịch vụ hoặc thành phần được gửi đến Kafka, nơi các dịch vụ khác có thể tiêu thụ chúng.

Thư mục cấu trúc có thể mở rộng:

eventEmitters/ sẽ chứa các publisher phát sự kiện đến Kafka topics.
eventHandlers/ sẽ chứa các consumer lắng nghe và xử lý sự kiện từ Kafka.

Ưu điểm:

Dễ dàng mở rộng hệ thống với nhiều dịch vụ liên quan đến việc phát và tiêu thụ sự kiện.
Tăng khả năng xử lý sự kiện theo thời gian thực.

## 2. Domain-Driven Design (DDD) với Apache Kafka
Tích hợp Kafka:

Kafka trong từng Domain: Kafka được tích hợp trong từng domain cụ thể. Mỗi domain có thể phát và tiêu thụ các sự kiện liên quan thông qua Kafka, với việc sử dụng các topics riêng biệt để duy trì tính toàn vẹn và độc lập của từng domain.

Chia nhỏ Event Sourcing theo Domain: Kafka cũng có thể được sử dụng để lưu trữ sự kiện (event sourcing) trong từng domain.

Ưu điểm:

Mỗi domain quản lý các sự kiện của riêng mình, giúp giảm phụ thuộc giữa các domain.
Dễ dàng phát triển và bảo trì từng domain một cách độc lập.
Khả năng sử dụng Kafka như một công cụ event sourcing để lưu trữ và phát lại sự kiện trong từng domain.

So sánh chính khi tích hợp Kafka:

EDA:
Kafka đóng vai trò trung tâm trong việc quản lý sự kiện giữa các dịch vụ. Kafka giúp đảm bảo rằng tất cả các dịch vụ đều có thể phát và tiêu thụ sự kiện theo thời gian thực.
EDA với Kafka thường tập trung vào việc mở rộng khả năng xử lý sự kiện và tương tác giữa các dịch vụ.

DDD:
Kafka được tích hợp vào từng domain cụ thể, giữ cho các domain độc lập với nhau nhưng vẫn có khả năng giao tiếp và xử lý sự kiện khi cần thiết.
DDD với Kafka tập trung vào việc giữ nguyên tắc độc lập của các domain và sử dụng sự kiện để quản lý trạng thái và tương tác giữa các domain.

Tổng kết:
EDA với Kafka thường tổ chức hệ thống theo hướng tập trung vào việc xử lý sự kiện trên toàn hệ thống, còn DDD với Kafka tập trung vào quản lý sự kiện theo từng domain, giữ nguyên tính độc lập và logic nghiệp vụ của từng domain. Cả hai cách tiếp cận đều có thể tận dụng Kafka, nhưng mục tiêu và cách thức triển khai có sự khác biệt rõ rệt.

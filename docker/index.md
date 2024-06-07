[Phần này](https://docs.docker.com/guides/) sẽ giúp bạn bắt đầu và học về docker trong quá trình phát triển phần mềm của bạn.

## Tổng quan về Docker

Docker là một nền tảng mở để phát triển, vận chuyển và chạy các ứng dụng. Docker cho phép bạn tách biệt các ứng dụng khỏi hạ tầng, giúp bạn triển khai phần mềm nhanh chóng. Với Docker, bạn có thể quản lý hạ tầng theo cách giống như quản lý ứng dụng. Bằng cách tận dụng các phương pháp của Docker cho việc vận chuyển, kiểm thử và triển khai mã, bạn có thể giảm đáng kể thời gian giữa việc viết mã và chạy mã trong môi trường sản xuất.

## Nền tảng Docker

Docker cung cấp khả năng đóng gói và chạy một ứng dụng một cách độc lập với môi trường triển khai được gọi là một container. Tính năng độc lập và bảo mật này giúp bạn có thể chạy đồng thời nhiều container cùng một lúc ở trên một máy chủ. 

Containers là các đơn vị nhỏ gọn và bao gồm mọi thứ cần thiết để chạy ứng dụng, do đó bạn không cần phải phụ thuộc vào những gì đã được cài đặt trên máy chủ. 

Bạn có thể chia sẻ các container khi làm việc, và đảm bảo rằng mọi người mà bạn chia sẻ đều nhận được container giống nhau và hoạt động theo cách giống nhau. Ví dụ, Khi bạn làm việc trong một nhóm, có thể có những khác biệt trong cấu hình môi trường làm việc giữa các thành viên. Ví dụ, một người dùng Windows, một người dùng macOS, và một người dùng Linux có thể có những cài đặt và phiên bản thư viện khác nhau. Khi sử dụng container, bạn có thể chia sẻ toàn bộ container mà bạn đang làm việc với các đồng nghiệp. Mỗi người nhận container sẽ có cùng một môi trường và cấu hình, dù họ đang sử dụng hệ điều hành nào.

## Docker có thể làm được gì?
+ Triển khai ứng dụng của bạn lên các môi trường một cách nhanh chóng và nhất quán, quản lý và scaling ứng dụng của bạn.
+ Có thể chạy nhiều workloads trên cùng một phần cứng.

## Docker architecture

Docker sử dụng kiến trúc client-server. 

Docker client giao tiếp với Docker daemon, thực hiện các tác vụ nặng như xây dựng, chạy và phân phối các container của bạn. Client Docker và daemon có thể chạy trên cùng một hệ thống, hoặc bạn có thể kết nối một client Docker đến một daemon Docker từ xa. 

Client Docker và daemon giao tiếp với nhau qua REST API, thông qua các socket UNIX hoặc một network interface. Docker Compose là một công cụ đi kèm với Docker client, cho phép bạn định nghĩa và chạy các ứng dụng đa container.

![image.png](https://docs.docker.com/get-started/images/docker-architecture.webp)

### Docker daemon

Docker daemon (dockerd) là thành phần chính của Docker, chịu trách nhiệm xử lý các yêu cầu từ Docker client (docker) qua các Docker API requests. Docker daemon chạy dưới nền, quản lý các Docker objects như containers, images, networks và volumes. Một daemon cũng có thể giao tiếp với một daemons khác để quản lý Docker services.

### Docker client

Docker client (docker) cách chính để người dùng tương tác với Docker. Khi bạn sử dụng những câu lệnh như là docker run, client sẽ gửi những câu lệnh này đến dockerd, để thực hiện chúng. Các lệnh để tương tác với dockerd do Docker API cung cấp. Docker client có thể giao tiếp với một hoặc nhiều daemon.

### Docker Desktop


Docker Desktop là một ứng dụng được thiết kế để giúp người dùng Mac, Windows, hoặc Linux dễ dàng tạo và quản lý các ứng dụng được đóng gói dưới dạng containers. Docker Desktop bao gồm Docker daemon (dockerd),  Docker client (docker)  Docker Compose, Docker Content Trust, Kubernetes và trung tâm trợ giúp. Để biết thêm thông tin có thể đọc [Tại đây](https://docs.docker.com/desktop/)

### Docker registries

Một Docker registry là nơi lưu trữ của các Docker images.  Docker Hub là một public registry mà bất kỳ ai cũng có thể sử dụng, và docker tìm images trên Docker Hub theo mặc định. Bạn cũng có thể tạo private registry của riêng mình.

Khi bạn sử dụng lệnh **docker pull** hoặc **docker run**, Docker sẽ pull image bạn yêu cầu từ registry bạn cấu hình. Khi sử dụng lệnh **docker push**, docker sẽ push image của bạn lên registry mà bạn đã cấu hình.

### Docker objects

Khi sử dụng Docker, bạn có thể tạo và sử dụng images, containers, networks, volumes, plugins và một số object khác. Phần này sẽ tóm tắt cơ bản về một vài objects này.


#### Images

Một image là một read-only template chứa những chỉ dẫn để tạo một Docker container. Thông thường, một image dựa trên một image khác, với một số tùy chỉnh bổ sung. Ví dụ, bạn có thể build một image dựa trên ubuntu image, nhưng cài đặt Apache web server và những ứng dụng bạn, cũng như các cấu hình khác để ứng dụng của bạn có thể chạy được.

Bạn cũng có thể tạo image của riêng mình và published nó lên registry. Để build image của riêng bạn, bạn tạo một Dockerfile với một vài cú pháp đơn giản để định nghĩa những bước cần để tạo image và chạy nó. Mỗi một chỉ thị trong Dockerfile sẽ tạo một layer trong image. Khi bạn thay đổi Dockerfile và rebuild lại image, chỉ những layer bị thay đổi sẽ rebuild lại. Đây là một phần lý do khiến cho images trở nên gọn nhẹ, nhỏ và nhanh chóng, khi so sánh với những công nghệ ảo hóa khác.

![image.png](https://www.codeproject.com/KB/Articles/1133826/Docker-layers.png)

#### Containers

Containers là một instance được tạo ra khi bạn chạy một image. Bạn có thể create, start, stop, move hoặc delete một container bằng cách sử dụng Docker API hoặc CLI. Bạn có thể kết nối một container với một hoặc nhiều networks, gán storage cho nó, hoặc thậm trí tạo một image mới từ trạng thái hiện tại của nó.

Theo mặc định, một container độc lập với những containers và host machine của nó. Bạn có thể kiểm soát mức độ độc lập của một  container's network, storage, hoặc các hệ thống con khác từ containers hoặc từ host machine.

Một container được xác định bởi image của nó và những cấu hình bạn cung cấp cho nó khi tạo và bắt đầu nó. Khi một container bị xóa, khi đó bất kỳ trạng thái nào bạn không lưu trữ dạng persistent storage sẽ bị mất.

Ví dụ về **docker run**

Câu lệnh dưới đây chạy một ubuntu container, thêm tương tác với container từ command-line của bạn và chạy **/bin/bash**:

```docker
docker run -i -t ubuntu /bin/bash
```

Khi bạn chạy câu lệnh trên, những điều sau đây sẽ xảy ra (giả sử bạn sử dụng cấu hình default registry):

1. Nếu bạn không có image ubuntu ở máy local, Docker sẽ pull từ registry bạn cấu hình như là bạn chạy lệnh **docker pull ubuntu** theo cách thông thường.

2. Docker sẽ tạo một container mới, như thể bạn chạy lệnh **docker container create** theo thủ công.

3. Docker phân bổ một read-write filesystem vào container và đưa nó làm layer cuối cùng. Điều này cho phép một container đang chạy có thể tạo hoặc chỉnh sửa files hoặc thư mục ở trong local filesystem của nó.

4. Docker tạo một network interface kết nối với container của bạn theo default network, vì bạn không cấu hình bất kỳ options network nào. Nó bao gồm việc gán địa chỉ IP cho container. Theo mặc định, containers kết nối với  external networks sử dụng network connection của máy host (tức là tài nguyên gì máy host truy cập được thì container cũng truy cập được).

5. Khi Docker khởi chạy container và thực thi /bin/bash, container đang chạy một phiên bản của shell Bash. Do container đang chạy ở chế độ tương tác (interactive) và được kết nối với terminal của bạn (do sử dụng các cờ -i và -t), bạn có thể cung cấp đầu vào bằng cách sử dụng bàn phím của mình trong khi Docker ghi lại đầu ra của container và hiển thị nó trên terminal của bạn.

6. Khi bạn chạy lệnh exit trong shell Bash bên trong container, quá trình thực thi /bin/bash sẽ kết thúc và container sẽ dừng lại, nhưng container không bị xóa. Bạn có thể khởi chạy lại hoặc loại bỏ container tùy thuộc vào nhu cầu sử dụng của bạn.

### Công nghệ đằng sau Docker

Docker là một phần mềm được viết bằng ngôn ngữ lập trình Go và tận dụng nhiều tính năng của kernel Linux để cung cấp chức năng của mình. Docker sử dụng một công nghệ gọi là **namespaces** để cung cấp không gian làm việc cô lập cho các **container**. Khi bạn chạy một **container**, Docker tạo ra một bộ các **namespaces** cho **container** đó.

Những **namespaces** này cung cấp một lớp cô lập. Mỗi khía cạnh của một container chạy trong một namespace riêng biệt và quyền truy cập của nó bị giới hạn trong namespace đó.

Nói tóm lại, Docker sử dụng namespaces của kernel Linux để cung cấp một môi trường làm việc cô lập cho mỗi container. Bằng cách này, Docker đảm bảo rằng các container chạy độc lập với nhau và không ảnh hưởng lẫn nhau, giúp cải thiện tính ổn định và bảo mật của hệ thống.






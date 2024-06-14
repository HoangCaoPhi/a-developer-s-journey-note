# Giới thiệu cơ bản về Microsoft Azure

Microsoft Azure là một nền tảng điện toán đám mây, với một bộ các services mở rộng giúp bạn xây dựng các giải pháp để đáp ứng mục tiêu business của mình. Azure services hỗ trợ mọi thứ từ đơn giản đến phức tạp. Azure giúp đơn giản hóa việc hosting dịch vụ web để lưu trữ các dịch vụ của bạn trên cloud. Bên cạnh các dịch vụ web đơn giản, Azure còn cung cấp khả năng tạo và quản lý các máy ảo (Virtual Machines). Máy ảo cho phép bạn chạy các hệ điều hành và phần mềm tùy chỉnh như trên một máy tính vật lý. Azure cung cấp nhiều dịch vụ dựa trên cloud như remote storage, database hosting và quản lý account một cách tập trung. Azure cũng cung cấp các dịch vụ mới như artificial intelligence (AI) và  Internet of Things (IoT).

Trong phần này, bạn sẽ tìm hiểu cơ bản về điện toán đám mây, một số core services cung cấp bởi Microsoft Azure, và học thêm một số services bạn có thể sử dụng.

## Giới thiệu về Cloud computing

Cloud computing cung cấp các dịch vụ điện toán qua internet. Các dịch vụ điện toán thông thường bao gồm hạ tầng CNTT như virtual machines (máy ảo), storage (kho lưu trữ), databases và networking. Cloud services cũng mở rộng các dịch vụ CNTT truyền thống bao gồm Internet of Things (IoT), machine learning (ML), và artificial intelligence (AI).

Bởi vì cloud computing sử dụng internet để cung cấp các dịch vụ này, nó không bị hạn chế bởi cơ sở hạ tầng vật lý giống như datacenter truyền thống. Điều đó có nghĩa là, khi bạn cần mở rộng cơ sở hạ tầng thì bạn không cần phải build một datacenter mới, bạn chỉ cần sử dụng clound để nhanh chóng mở rộng phạm vi hoạt động CNTT của mình.

## Mô hình chia sẻ trách nhiệm (Shared Responsibility Model)

Trong mô hình datacenter truyền thống, công ty có trách nhiệm duy trì không gian vật lý, nơi đặt các máy chủ và thiết bị mạng, bảo trì hoặc thay thế máy chủ nếu có điều gì đó xảy ra. Phòng ban IT có trách nhiệm bảo trì tất cả cơ sở hạ tầng và phần mềm cần thiết để giữ cho datacenter hoạt động một cách bình thường. Họ cũng chịu trách nhiệm vá lỗi hệ thống vả đảm bảo hệ thống hoạt động ở phiên bản ổn định, chính xác.

Với mô hình chia sẻ trách nhiệm, trách nhiệm này sẽ được chia sẻ giữa bên cung cấp cloud và người sử dụng. Bảo mật vật lý, nguồn, làm mát, kết nối mạng sẽ là trách nhiệm của bên cung cấp cloud. Người dùng cloud chịu trách nhiệm về dữ liệu và thông tin được lưu trữ trên cloud (Bạn sẽ không muốn nhà cung cấp cloud đọc được những thông tin của mình nên hãy mã hóa dữ liệu quan trọng). Người dùng cũng chịu trách nhiệm vào quyền truy cập , nghĩa là bạn chỉ cấp phát quyền cho những ai cần nó.

Trách nhiệm còn phụ thuộc vào một số tình huống cụ thể, ví dụ nếu bạn sử dụng cloud SQL database, nhà cung cấp cloud sẽ chịu trách nhiệm bảo trì cơ sở dữ liệu thực tế. Tuy nhiên, bạn vẫn phải chịu trách nhiệm cho dữ liệu bạn đưa vào cơ sở dữ liệu. Nếu bạn deployed một virtual machine và cài đặt một cơ sở dữ liệu SQL trên nó, bạn sẽ phải chịu trách nhiệm cho việc và lỗi và cập nhật cơ sở dữ liệu, cũng như bảo trì nó và quan tâm những dữ liệu được lưu vào cơ sở dữ liệu. 

Với một on-premises datacenter, bạn chịu trách nhiệm về mọi thứ. Với cloud computing, những trách nhiệm đó sẽ thay đổi. Mô hình chia sẻ trách nhiệm gắn chặt với các loại cloud service: infrastructure as a service (IaaS),  platform as a service (PaaS), và software as a service (SaaS). 

* IaaS hầu hết đặt trách nhiệm lên người dùng cloud, nhà cung cấp cloud chịu trách nhiệm về bảo mật vật lý, nguồn điện và kết nối mạng.
* SaaS hầu hết đặt trách nhiệm lên nhà cung cấp cloud
* PaaS ở giữa Iaas và SaaS việc chia sẻ trách nhiệm dường như đồng đều

Mô hình dưới đây trực quan trách nhiệm của từng đối tượng theo từng loại cloud service type:

![image.png](https://learn.microsoft.com/en-us/training/wwl-azure/describe-cloud-compute/media/shared-responsibility-b3829bfe.svg)


Khi sử dụng cloud, bạn luôn luôn phải chịu trách nhiệm cho:

* Thông tin được lưu trữ trên cloud
* Các thiết bị kết nối với cloud
* Tài khoản và định danh của người, dịch vụ, và thiết bị trong tổ chức của bạn

Nhà cung cấp cloud chịu trách nhiệm cho:
* datacenter vật lý
* network vật lý
* hosts vật lý

Tùy vào mô hình service sẽ chịu trách nhiệm cho:
* Hệ điều hành
* Kết nối mạng và kiểm soát mạng
* Ứng dụng
* Định danh và hạ tầng

## Xác định cloud models

Cloud models xác định kiểu triển khai của tài nguyên cloud. Có 3 loại cloud models chính là private, publich và hybrid.

#### Private cloud

Một private cloud là sự phát triển tự nhiên của một datacenter, nó được sử dụng bởi một thực thể duy nhất, giúp cho việc kiểm soát tốt hơn cho các công ty và các bộ phận CNTT. Tuy nhiên, chi phí có thể cao hơn và ít lợi ích hơn so với một public cloud.

Một private cloud có thể hosted từ datacenter ở chỗ bạn, nó cũng có thể lưu trữ tại một datacenter chuyên dụng ngoài, hoặc một bên thứ ba nào đó cung cấp datacenter cho doanh nghiệp của bạn.

#### Public cloud

Một public cloud được build, kiểm soát và duy trì bởi nhà cung cấp cloud. Với một  public cloud, bất kỳ ai muốn mua dịch vụ cloud đều có thể truy cập và sử dụng tài nguyên. 

#### Hybrid cloud

Hybrid cloud là môi trường sử dụng cả private cloud và public cloud, hybrid cloud cho phép bạn sử dụng private cloud để giải quyết những yêu cầu có độ tin cậy và bảo mật cao hơn, đồng thời sử dụng public cloud để rộng nhanh chóng khi có nhu cầu tăng cao và tạm thời. 

Nó cho phép tối ưu hóa việc sử dụng tài nguyên và chi phí, vì các tổ chức có thể sử dụng public cloud cho các tác vụ không nhạy cảm và không đòi hỏi nhiều sự quản lý, trong khi giữ lại private cloud cho các dịch vụ và dữ liệu quan trọng.

Ví dụ:  Một tổ chức có thể triển khai ứng dụng nội bộ như hệ thống quản lý khách hàng (CRM) trên private cloud để bảo mật dữ liệu khách hàng, đồng thời sử dụng public cloud cho việc lưu trữ và xử lý dữ liệu từ các chiến dịch tiếp thị trực tuyến.

Bảng sau sẽ mô tả một số key quan trọng về các mô hình cloud:

| Đặc điểm                                      | Public cloud                                      | Private cloud                                          | Hybrid cloud                                      |
|-----------------------------------------------|---------------------------------------------------|--------------------------------------------------------|--------------------------------------------------|
| **Chi Phí Đầu Tư Ban Đầu**                    | Không có chi phí đầu tư ban đầu để mở rộng        | Phải mua phần cứng để khởi đầu và bảo trì              | Cung cấp sự linh hoạt nhất                       |
| **Cấp Phát Ứng Dụng**                         | Ứng dụng có thể được cấp phát và hủy cấp phát nhanh chóng | Tổ chức có quyền kiểm soát hoàn toàn tài nguyên và bảo mật | Tổ chức tự quyết định nơi chạy ứng dụng          |
| **Mô Hình Chi Phí**                           | Tổ chức chỉ trả cho những gì họ sử dụng           | Tổ chức phải chịu trách nhiệm về bảo trì và cập nhật phần cứng | Tổ chức kiểm soát các yêu cầu bảo mật, tuân thủ, hoặc pháp lý |
| **Kiểm Soát Tài Nguyên và Bảo Mật**           | Tổ chức không có quyền kiểm soát hoàn toàn tài nguyên và bảo mật | Tổ chức có quyền kiểm soát hoàn toàn tài nguyên và bảo mật | Tổ chức kiểm soát các yêu cầu bảo mật, tuân thủ, hoặc pháp lý |
| **Vị Trí Dữ Liệu**                            | Dữ liệu được lưu trữ cùng với dữ liệu của các tổ chức khác | Dữ liệu không được lưu trữ cùng với dữ liệu của các tổ chức khác | Có thể chọn nơi lưu trữ dữ liệu                 |


#### Multi-cloud
Kịch bản multi-cloud ngày càng phổ biến, bạn sử dụng nhiều nhà cung cấp public cloud. Có thể sử dụng những tính năng khác nhau từ nhà cung cấp cloud khác nhau. Dù lý do là gì, trong môi trường multi-cloud bạn phải quản lý tài nguyên cũng như bảo mật trong cả hai môi trường.

#### Azure Arc
Azure Arc là một bộ các công nghệ giúp bạn quản lý môi trường cloud của bạn, cho dù đó là public cloud trên Azure, private cloud trên datacenter của bạn, hybrid hay là multi cloud...

#### Azure VMware Solution
Điều gì xảy ra khi bạn có sẵn private cloud với VMware và bạn muốn mở rộng sang public cloud và hybrid cloud, Azure VMware Solution sẽ giúp bạn chạy VMware workloads trong Azure với khả năng mở rộng và tích hợp một cách liền mạch mà không cần phải thay đổi các ứng dụng hoặc quy trình hiện có.

## Mô hình consumption-based
Khi so sánh các mô hình cơ sở hạ tầng CNTT, có hai loại chi phí cần xem xét.  Capital expenditure (Chi phí đầu tư) (CapEx) và operational expenditure (Chi phí hoạt động) (OpEx).

CapEx thông thường chỉ một lần, chi phí trả trước để mua hoặc bảo đảm các tài nguyên hữu hình. Một tòa nhà mới, làm bãi đậu xe, xây dựng một datacenter, mua phương tiện, thiết bị cho công ty là ví dụ điển hình của CapEx.

Ngược lại, OpEx là trả tiền cho các dịch vụ hoặc sản phẩm theo thời gian, đăng ký dịch vụ cloud là một ví dụ của OpEx.

Điện toán đám mây (Cloud computing) thuộc OpEx vì nó vận hành dựa trên mô hình consumption-based. Với điện toán đám mây, bạn không phải trả bất kỳ chi phí vật lý, tiền điện, tiền bảo mật, hoặc bất kỳ điều gì liên quan đến việc bảo trì một datacenter. Thay vào đó, bạn phải trả tiền cho tài nguyên CNTT mà bạn sử dụng. Nếu bạn không sử dụng bất kỳ tài nguyên CNTT nào trong tháng này, bạn sẽ không phải trả tiền cho bất kỳ tài nguyên CNTT nào.

Mô hình consumption-based có nhiều lợi ích:

* Không có chi phí nào trả trước
* Không cần phải mua và quản lý cơ sở hạ tầng tốn kém mà người dùng có thể không sử dụng hết tài nguyên của nó.
* Khả năng trả tiền cho nhiều tài nguyên hơn khi cần thiết.
* Khả năng ngừng thanh toán cho các tài nguyên không còn cần thiết.

Với một datacenter truyền thống, bạn phải cố gắng ước tính tài nguyên cần sử dụng trong tương lai. Nếu bạn ước lượng quá cao, bạn có thể chi tiêu hơn mức cần thiết và có khả năng lãng phí tiền bạc. Nếu bạn ước lượng quá thấp, thì datacenter của bạn sẽ nhanh chóng đạt ngưỡng tài nguyên gây ra vấn đề chậm về mặt hiệu năng. Việc chỉnh sửa khi ước lượng sai sẽ mất rất nhiều công sức và thời gian như việc mua thêm tài nguyên, cài đặt phần mềm, cài đặt network...

Trong một mô hình cloud-based, bạn không phải lo lắng về việc đáp ứng đúng nhu cầu tài nguyên cần thiết. Nếu bạn cảm thấy mình cần thêm virtual machines, bạn có thể thêm nó vào. Nếu nhu cầu giảm và bạn không cần nhiều máy ảo, bạn có thể loại bỏ máy nếu cần. Dù sao đi nữa, bạn chỉ phải trả tiền cho các máy ảo mà bạn sử dụng mà thôi.

## So sánh giá các mô hình clouds

Thông thường bạn phải trả chi phí cho những dịch vụ cloud mà bạn sử dụng, điều này giúp bạn: 

* Lập kế hoạch và quản lý chi phí hoạt động.
* Chạy cơ sở hạ tầng một cách hiệu quả hơn.
* Scale nhu cầu business của bạn nếu cần thiết.

Nói một cách khác, điện toán đám mây là trả chi phí để thuê sức mạnh và khả năng lưu trữ của một datacenter từ một nhà cung cấp. Bạn có thể xử lý tài nguyên cloud giống như cách bạn xử lý tài nguyên trong datacenter của riêng mình. Tuy nhiên, không giống như datacenter của riêng bạn, khi bạn sử dụng xong tài nguyên cloud, bạn sẽ trả lại chúng. Bạn chỉ phải tính phí cho những gì bạn sử dụng.

Thay vì duy trì CPU và bộ lưu trữ trong datacenter của mình, bạn thuê chúng trong thời gian bạn cần. Nhà cung cấp cloud đảm nhiệm việc duy trì cơ sở hạ tầng cơ bản cho bạn. Nó cho phép bạn nhanh chóng giải quyết những thách thức kinh doanh khó khăn nhất và mang đến những giải pháp tiên tiến cho người dùng của bạn.






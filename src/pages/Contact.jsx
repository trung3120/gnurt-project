import React from 'react';

import Grid from '../components/Grid';

const Contact = () => {
    return (
        <div className='contact'>
            <h1>Về GnurTiw</h1>
            <div className='contact__text'>
                <p>
                    GnurTiw là một Công ty khởi nghiệp trong lĩnh vực ô tô với sự hậu 
                    thuẫn của GnurtGroup – doanh nghiệp tư nhân lớn nhất Việt Nam, chính 
                    vì lẽ đó chúng tôi được thỏa sức thiết kế xe theo phương thức đầy 
                    mới lạ và táo bạo. Ngay từ lúc khởi đầu, mục tiêu của chúng tôi là 
                    tạo ra những chiếc xe đẳng cấp thế giới, mang bản sắc Việt Nam. 
                    Bằng cách mời người dân Việt Nam – khách hàng tương lai đầu tiên của 
                    chúng tôi – trực tiếp tham gia vào quá trình thiết kế xe ngay từ khi 
                    mới bắt đầu, chúng tôi đã thay đổi hoàn toàn cách thức thiết kế truyền 
                    thống.
                </p>
            </div>
            <div className='contact__main'>
                <Grid
                    col={3}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="contact__main__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="contact__main__content">
                            <p>
                                Liên hệ hỗ trợ <strong>079-420-2260</strong>
                            </p>
                            <p>
                                Theo dõi đơn hàng <strong>079-420-2260</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>079-420-2260</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="contact__main__title">
                            Địa chỉ trụ sở chính
                        </div>
                        <div className="contact__main__content">
                            <p>
                                K22/06/04 Trần Hoành, Phường Khuê Mỹ, Quận Ngũ Hành Sơn, Thành Phố Đà Nẵng, Việt Nam
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="contact__main__title">
                            Dịch vụ bảo dưỡng GnurTiw
                        </div>
                        <div className="contact__main__content">
                            <p>
                                Khi đến với GnurTiw, thứ bạn nhận được không chỉ là một chiếc 
                                xe ưng ý và chất lượng mà còn là những dịch vụ khách hàng có 
                                giá trị dài hạn. Đối với dịch vụ sau bán hàng, khách hàng sử 
                                dụng xe GnurTiw sẽ được hỗ trợ cứu hộ  24/7 trong thời gian 
                                bảo hành. Bạn có thể hoàn toàn yên tâm bởi đại lý sẽ phục vụ bạn
                                với một đội ngũ nhân viên chuyên nghiệp và hệ thống trang thiết 
                                bị kỹ thuật chuyên môn, hiện đại nhất.
                            </p>
                        </div>
                    </div>
                </Grid>
            </div>
        </div>
  );
}

export default Contact;

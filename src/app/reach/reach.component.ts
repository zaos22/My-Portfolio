import { Component } from '@angular/core';

@Component({
  selector: 'app-reach',
  template: `<section class="">
    <div class="container">
      <div class="row space3">
        <div class="col-sm-5">
          <div class="iframe-show">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24301.294934763075!2d0.40177825434013564!3d40.41634092210209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a045ba0cfdcb8f%3A0x478dc49e3180e06a!2zMTI1ODAgQmVuaWNhcmzDsywgQ2FzdGVsbMOz!5e0!3m2!1sca!2ses!4v1684884832242!5m2!1sca!2ses"
              width="400"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="iframe-space">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24301.294934764464!2d0.4017782326327896!3d40.416340922098236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a045ba0cfdcb8f%3A0x478dc49e3180e06a!2zMTI1ODAgQmVuaWNhcmzDsywgQ2FzdGVsbMOz!5e0!3m2!1sca!2ses!4v1684769134168!5m2!1sca!2ses"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="col-sm-7">
          <div class="space1 container2 container">
            <section>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-md-8">
                    <div class="contact-box">
                      <div class="contact-box-header">
                        <h2>Contact</h2>
                      </div>
                      <div class="contact-box-body">
                        <div class="contact-option">
                          <i class="fas fa-envelope"></i>
                          <span>Email: ozazou2001@gmail.com</span>
                        </div>
                        <div class="contact-option">
                          <i class="fas fa-phone"></i>
                          <span>Phone: +34617177042</span>
                        </div>
                        <div class="contact-option">
                          <i class="fas fa-map-marker-alt"></i>
                          <span>Address: Spain, Benicarló</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="pt-5"></div>
      </div>
    </div>
  </section>`,
  styleUrls: ['./reach.component.css'],
})
export class ReachComponent {}

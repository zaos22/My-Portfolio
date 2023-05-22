import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<section>
    <div class="container">
      <div class="row">
        <div class="col-sm-5">
          <div class="p-profile"></div>
        </div>
        <div class="col-sm-7">
          <div class="space2">
            <span class="typing-animation"></span>
          </div>
          <H1>Oussama Zazou Abid</H1>
          <div class="space4">
            <p>
              I am a highly motivated web programmer with experience in
              internships and academic training. I possess strong skills in web
              development and have the ability to work both independently and as
              part of a team. I value constructive criticism and am committed,
              serious, and focused on delivering high-quality results. I am
              enthusiastic about contributing to the success of your company as
              a web programmer and am available to provide further details about
              my experience.
            </p>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <div class="d-flex justify-content-between">
              <div class="logo-box react p-3">
                <a class="a-react" href="https://react.dev/"
                  ><i class="fab fa-react fa-4x"></i
                ></a>
              </div>
              <div class="logo-box angular p-3">
                <a class="a-angular" href="https://angular.io"
                  ><i class="fab fa-angular fa-4x"></i
                ></a>
              </div>
              <div class="logo-box vue p-3">
                <a class="a-vue" href="https://vuejs.org/"
                  ><i class="fab fa-vuejs fa-4x"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="space3 d-flex justify-content-center">
            <a href="/reach" class="info-link">
              <span class="info-text">More information</span>
              <span class="info-animation">Click on me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  jobTitles: string[] = [
    'Full-Stack Developer',
    'Front-End Developer',
    'Back-End Developer',
    'JavaScript Programmer',
  ];
  currentJobIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;

  ngOnInit() {
    this.startTypingAnimation();
  }

  startTypingAnimation() {
    const typingSpan = document.querySelector('.typing-animation');
    if (typingSpan) {
      const jobTitle = this.jobTitles[this.currentJobIndex];
      if (!this.isDeleting) {
        typingSpan.textContent += jobTitle.charAt(this.currentCharIndex);
        this.currentCharIndex++;
      } else {
        typingSpan.textContent = jobTitle.substring(
          0,
          this.currentCharIndex - 1
        );
        this.currentCharIndex--;
      }

      if (!this.isDeleting && this.currentCharIndex === jobTitle.length) {
        this.isDeleting = true;
        setTimeout(() => {
          this.startTypingAnimation();
        }, 1500);
      } else if (this.isDeleting && this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentJobIndex++;
        if (this.currentJobIndex >= this.jobTitles.length) {
          this.currentJobIndex = 0;
        }
        setTimeout(() => {
          this.startTypingAnimation();
        }, 500);
      } else {
        setTimeout(() => {
          this.startTypingAnimation();
        }, 100);
      }
    }
  }
}

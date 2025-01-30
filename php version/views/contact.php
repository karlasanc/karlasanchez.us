<?php include 'views/include/header.php'; ?>

<main id="contact" class="main-content">
  <header class="wrapper">
    <h1>Contact Me</h1>
    To see more of my work & learn more about what I do, feel free to visit my socials or send me a message below:
  </header>


  <form action="/action_page.php" class="wrapper">
    <h2>Message Me</h2>

    <fieldset class="wrapper">
      <label for="name">Your Name</label>
      <input type="text" id="name" name="name" placeholder="Your name.." />
    </fieldset>

    <fieldset class="wrapper">
      <label for="email">Email Address</label>
      <input type="text" id="email" name="email" placeholder="Your email.." />
    </fieldset>

    <fieldset class="subject wrapper">
      <label for="subject">Subject</label>
      <input type="text" id="subject" name="subject" placeholder="Email subject.." />
    </fieldset>

    <fieldset class="message wrapper">
      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Your message.."></textarea>
    </fieldset>

    <br>

    <fieldset class="button wrapper">
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </fieldset>
  </form>

</main>

<?php include 'views/include/footer.php'; ?>
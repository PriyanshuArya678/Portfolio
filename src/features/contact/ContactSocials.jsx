function ContactSocials() {
  const socials = [
    {
      social: "email",
      un: "strangelypriyanshu@gmail.com",
      href: "mailto:strangelypriyanshu@gmail.com",
    },
    {
      social: "github",
      un: "PriyanshuArya678",
      href: "https://www.github.com/PriyanshuArya678/",
    },
    {
      social: "linkedin",
      un: "priyanshu-arya-343155239",
      href: "https://www.linkedin.com/in/priyanshu-arya-343155239",
    },
    {
      social: "instagram",
      un: "_priyanshu__arya_",
      href: "https://www.instagram.com/_priyanshu__arya_",
    },
    {
      social: "X",
      un: "Priyansh9773563",
      href: "https://x.com/Priyansh9773563",
    }
  ];
  return (
    <div className="flex flex-col">
      <p className="text-3xl text-textColor">Reach Out Via Socials </p>
      <div className="flex flex-col space-y-2 pt-5">
        <p className="line text-base text-textColor md:text-2xl">
          .socials &#123;{" "}
        </p>
        {socials.map((social) => {
          return (
            <div className="  line text-base md:text-2xl" key={social.social}>
              <span className="pl-5 text-textColor md:pl-8">
                {social.social}:
              </span>
              <a
                className=" pl-2 text-base text-accentColor hover:underline md:text-2xl"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.un};
              </a>
            </div>
          );
        })}
        <p className="line text-base text-textColor md:text-2xl">&#125;</p>
      </div>
    </div>
  );
}

export default ContactSocials;

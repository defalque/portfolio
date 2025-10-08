type EmailTemplateProps = {
  email: string;
  message: string;
};

function EmailTemplate({ email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>Hai un messaggio da: {email}</h1>
      <p>{message}</p>
    </div>
  );
}

export default EmailTemplate;

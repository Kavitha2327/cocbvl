import React from "react";

export default function Footer2() {
  return (
    <footer className="footer-section">
      <section
        id="contact-us"
        className="bg-cta"
        style={{
          backgroundImage: "url('/images/2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-5 col-md-6">
              <div className="card section-title px-4 py-5 shadow rounded bg-white border-0 ms-lg-5">
                <h6 className="mt-2 mb-3" style={{ lineHeight: "2.5" }}>
                  Email:{" "}
                  <span className="text-info">
                   
                  </span>{" "}
                  <br />
                  Ph:  <br />
                  Ph:  <br />
                  Website:{" "}
                  {/* <Link
                    href="https://adityauniversity.in/"
                    target="_blank"
                    className="text-primary"
                  >
                    https://adityauniversity.in/
                  </Link>{" "} */}
                  <a
                    href="https://adityauniversity.in/"
                    target="_blank"
                    className="text-primary"
                  ></a>
                  <br />
                  Address:
                </h6>
                <p className="text-muted para-desc mx-auto mb-0">
                  Church of Christ Complex, Bikkavolu <br /> Pin: 533343
                  East Godavari District,
                  <br />
                  Andhra Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

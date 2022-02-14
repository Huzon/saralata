// $(document).ready(() => {
//     parse();
// });

function parse(course) {
    const daata = `"Name","Period","Target","Level","Course"
"Advanced Diploma in Computer Teacher Training (ADCTT)","12 Months","12","3","Computer Applications"
"Advance Diploma in Computer Studies (ADCS)","12 Months","12","3","Computer Applications"
"Professional Diploma in Computer Application (PDCA)","12 Months","12","3","Computer Applications"
"Diploma in Information Technology (DIT)","12 Months","12","3","Computer Applications"
"Advanced Diploma in Faculty Management (ADFM)","12 Months","12","3","Computer Applications"
"Advance Diploma in Computer Application (ADCA)","12 Months","10","3","Computer Applications"
"Diploma in Computer Application (DCA)","6 Months","10","3","Computer Applications"
"Basic Computer Course (BCC)","3 months","8","3","Computer Applications"
"Professional Diploma in Banking & Accounting (PDBA)","12 Months","12","4","Financial"
"Full Accounting and Taxation Package (FATP)","12 Months","12","4","Financial"
"Advance Diploma in Computer Programming & Accounting (ADCPA)","12 Months","12","4","Financial"
"Diploma in Taxation & Accountancy (DTA)","6 Months","12","4","Financial"
"Diploma in Computer Application with Tally (DCA‐T)","9 Months","10","4","Financial"
"Basic Computer Course With Tally (BCC‐T)","6 Months","10","4","Financial"
"Computerized Financial Accounting (CFA)","5 Months","10","4","Financial"
"Computerized Industrial Accounting (CIA)","3 months","10","4","Financial"
"Complete Accounting Package (CAP)","3 months","10","4","Financial"
"Certificate in Computer Application with Tally (CCA‐T)","4 months","10","4","Financial"
"Diploma in Professional Web Designing (DPWD)","12 Months","12","2","Website Designing & Programming"
"Diploma in Software Engineering (DSE)","12 Months","12","2","Website Designing & Programming"
"Web Development Programming ‐ I (WDP‐I)","6 Months","12","2","Website Designing & Programming"
"Certification in Web Designing (CWD)","6 Months","10","2","Website Designing & Programming"
"Diploma in Digital Marketing (DDM)","6 Months","12","2","Website Designing & Programming"
"Certificate in Cyber Security (CCS)","6 Months","12","2","Website Designing & Programming"
"Advance Java Programming (AJP)","6 Months","12","2","Website Designing & Programming"
"Diploma in DOT NET Technology (DDT)","5 Months","12","2","Website Designing & Programming"
"Diploma in Web Development (DWD)","3 months","12","2","Website Designing & Programming"
"Certificate in Web Development (CWDP)","2 Months","12","2","Website Designing & Programming"
"Diploma in Database‐Administration [RDBMS] (DDA)","2 Months","12","2","Website Designing & Programming"
"Digital Advertising Design & Marketing (DADM)","12 Months","12","1","Multimedia & Graphic Designing"
"Diploma in Graphic & Animation (DGA)","6 Months","12","1","Multimedia & Graphic Designing"
"Advanced Program in Digital Media & Design (APDMD)","9 Months","12","1","Multimedia & Graphic Designing"
"Diploma in Multimedia Design Program (DMDP)","12 Months","12","1","Multimedia & Graphic Designing"
"Diploma in Game Design & Integration (DGDI)","6 Months","12","1","Multimedia & Graphic Designing"
"Diploma in Graphic Designing & Animation (DGDA)","6 Months","10","1","Multimedia & Graphic Designing"
"Diploma in Desktop Publishing (DDP)","9 Months","10","1","Multimedia & Graphic Designing"
"Diploma in DTP & Graphics Designing (DDGD)","6 Months","10","1","Multimedia & Graphic Designing"
"Certification in Graphic Designing (CGD)","4 months","10","1","Multimedia & Graphic Designing"
"Certificate in Desktop Publishing (CDP)","6 Months","10","1","Multimedia & Graphic Designing"
"Digital Photography","2 Months","10","1","Multimedia & Graphic Designing"
"Marketing Skills","3 Months","","","Management Courses"
"Negotiation Skills","3 Months","","","Management Courses"
"HR Training","3 Months","","","Management Courses"
"Logistics and Supply Chain Management","3 Months","","","Management Courses"
"Managerial Skills","3 Months","","","Management Courses"
"Office Management","3 Months","","","Management Courses"
"Business Ethics for Organisations & Professionals","3 Months","","","Management Courses"
"Personality Development and Grooming","10 Days","","","Management Courses"
"Interview Skills","10 Days","","","Management Courses"
"Spoken English","3 Months","","","Management Courses"
"Diploma in Hardware and Networking","9 Months","","","Hardware and Networking"
"Cisco Certified Network Associate","6 Months","","","Hardware and Networking"
"Ethical Hacking","6 Months","","","Hardware and Networking"
"Microsoft Certified Solution Expert","6 Months","","","Hardware and Networking"`;
    var htmlTxt = "";
    const input = $("#data").val();
    const data = $.csv.toObjects(daata);
    $("#result").empty();
    $("#result").html(JSON.stringify(data, null, 3));

    htmlTxt += "<div class='course-div'>";
    htmlTxt += "<h1 class='section-title'>" + course + "</h1>";

    data.forEach((val) => {
        // console.log(val.Name);
        // alert(htmlTxt);
        if (val.Course == course) {
            htmlTxt += "<div class='course'>";
            htmlTxt += "<div class='course-title'>";
            htmlTxt += val.Name;
            htmlTxt += "</div>";
            htmlTxt += "<div class='course-info'>";
            //   htmlTxt += "<div>";
            //   htmlTxt += "Level : ";
            //   for (let index = 0; index < val.Level; index++) {
            //     htmlTxt += "<i class='fas fa-star'></i>";
            //   }
            //   htmlTxt += "</div>";

            //   // val.Level +
            //   htmlTxt += "<div>";

            //   htmlTxt += " Target : " + val.Target;
            //   htmlTxt += "</div>";

            htmlTxt += "<div>";
            htmlTxt += " Period : " + val.Period + " <i class='fas fa-clock'></i>";

            htmlTxt += "</div>";

            htmlTxt += "</div>";
            htmlTxt += "</div > ";
        }
        htmlTxt += "</div>";
    });
    $(".courses").append(htmlTxt);
}

function popularCourses() {
    let dataString = `"Name","Period","Target","Level","Course"
"Advanced Diploma in Computer Teacher Training (ADCTT)","12 Months","12","3","Computer Applications"
"Advance Diploma in Computer Studies (ADCS)","12 Months","12","3","Computer Applications"
"Advance Diploma in Computer Application (ADCA)","12 Months","10","3","Computer Applications"
"Professional Diploma in Banking & Accounting (PDBA)","12 Months","12","4","Financial"
"Advance Diploma in Computer Programming & Accounting (ADCPA)","12 Months","12","4","Financial"
"Certificate in Computer Application with Tally (CCA‐T)","4 months","10","4","Financial"
"Advanced Diploma in Hardware and Networking","","","","Hardware and Networking"
"Cisco Certified Network Associate","","","","Hardware and Networking"
"Ethical Hacking","","","","Hardware and Networking"
"Logistics and Supply Chain Management","3 Months","","","Management Courses"
"Business Ethics for Organisations & Professionals","3 Months","","","Management Courses"
"Personality Development and Grooming","10 Days","","","Management Courses"
"Digital Advertising Design & Marketing (DADM)","12 Months","12","1","Multimedia & Graphic Designing"
"Diploma in Graphic & Animation (DGA)","6 Months","12","1","Multimedia & Graphic Designing"
"Advanced Program in Digital Media & Design (APDMD)","9 Months","12","1","Multimedia & Graphic Designing"
"Diploma in Professional Web Designing (DPWD)","12 Months","12","2","Website Designing & Programming"
"Diploma in Digital Marketing (DDM)","6 Months","12","2","Website Designing & Programming"
"Certificate in Cyber Security (CCS)","6 Months","12","2","Website Designing & Programming"`;

    let htmlTxt = "";
    const data = $.csv.toObjects(dataString);
    // $("#result").empty();
    // $("#result").html(JSON.stringify(dataString, null, 3));

    data.forEach((val) => {
        htmlTxt += `<div class="courses-box">
                <div class="img"><img src="./assets/images/popular-courses/${val.Name}.jpg"></img>
                </div>
                <h6 class="title">${val.Name}</h6>
                <div class="info">
                    <table>
                        
                        <tr>
                            <td>Duration</td>
                            <td>${val.Period}</td>
                        </tr>
                    </table>
                </div>
                <div class="join">
                    <h6>Interested? </h6>
                    <a href="#" class="button-join">Enquire</a>
                </div>
            </div>`;
    });
    $(".courses").append(htmlTxt);
}
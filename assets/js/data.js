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
"Digital Photography","2 Months","10","1","Multimedia & Graphic Designing"`;
    var htmlTxt = "";
    const input = $("#data").val();
    const data = $.csv.toObjects(daata);
    $("#result").empty();
    $("#result").html(JSON.stringify(data, null, 3));

    data.forEach((val) => {
        // console.log(val.Name);
        // alert(htmlTxt);
        if (val.Course == course) {
            htmlTxt += "<div class='course'>";
            htmlTxt += "<div class='course-title'>";
            htmlTxt += val.Name;
            htmlTxt += "</div>";
            htmlTxt += "<div class='course-info'>";
            htmlTxt += "<div>";
            htmlTxt += "Level : ";
            for (let index = 0; index < val.Level; index++) {
                htmlTxt += "<i class='fas fa-star'></i>";
            }
            htmlTxt += "</div>";

            // val.Level +
            htmlTxt += "<div>";

            htmlTxt += " Target : " + val.Target;
            htmlTxt += "</div>";

            htmlTxt += "<div>";
            htmlTxt += " Period : " + val.Period + " <i class='fas fa-clock'></i>";

            htmlTxt += "</div>";

            htmlTxt += "</div>";
            htmlTxt += "</div > ";
        }
    });
    $(".courses").html(htmlTxt);
}
---
title: Future of Technology in Healthcare
subtitle: Understanding the value of a product approach to innovate in healthcare.
featured: true
authors:
  - melek-somai
publishedAt: 01-01-2023
excerpt: 
---

{% callout type="gray" %}
This article is adapted from _Why are we building a Product Engineering team in Healthcare?_, a previous article I wrote during my role as CTO at Inception Health. You can read [the original article](https://medium.com/inception-health/why-are-we-building-a-product-engineering-team-in-healthcare-ee76599effb3).
{% /callout %}

## State of Information Technology in Healthcare

In the last decades, Technology [has eaten the world](https://a16z.com/2011/08/20/why-software-is-eating-the-world/). It has disrupted and is disrupting every single industry, from automobile, aerospace, manufacturing, telecommunication, entertainment, banking, to e-commerce. The common denominator in all these cases is that technology has enabled a group of talented teams to design and launch new products, experiences, tools, and modern infrastructure at lower costs, disrupting incumbents and offering novel experiences and better services to their users and communities. Those innovations often offer a far better **experience**, and are **accessible**, competitive, and **scalable** at an order of magnitude higher than traditional incumbents.

These differentiators - experience, access, and scale - are all aligned with the vision of what better Healthcare should be about. However, the experience of healthcare delivery systems with technology has had abysmal results. Healthcare technology has [amplified healthcare system dysfunctions](https://hbr.org/2017/11/the-it-transformation-health-care-needs) and raised dissatisfaction from healthcare professionals and patients alike. Although we invested heavily on digitizing the clinic, the medical records, and a lot of our administrative tasks, the _experience of care_ and the _culture of technology_ in Medicine did not improve dramatically and more importantly did not support healthcare to become more accessible and more scalable. To the contrary, it has but made technology a prohibitive endeavor. Healthcare systems have to pay a hefty price - in some instances [more than $1.5 Billion for a single implementation](https://www.fiercehealthcare.com/it/mayo-begins-1-5-billion-ehr-implementation) - to be able to leverage technology for care services.

One of the key observations I realized after 10 years as a Clinical Informatician is that the majority of Healthcare systems do still consider technology as a supportive function to their clinical operations. Technology is regarded as an IT (information technology) function and therefore an operational cost component. It exclusively focuses on billing, reimbursement, processes, and enterprise reporting. It is too much focused on operational _efficiency_ than about operational _innovation_. And whatever innovation is built, it is developed and deployed at the edges and limited in most cases to proof-of-concept initiatives that are short lived.

This has led to a few challenges. First, Healthcare systems are today operating healthcare with inadequate technology infrastructure and more importantly, inappropriate technology culture. Surprisingly, one may believe that healthcare is a technology powerhouse - from MRI scanners, monoclonal antibodies, to customized cellular therapies just to name a few. And that is _partly_ true. Medicine and life science are the most advanced industries with a plethora of innovation and research. On the opposite side, healthcare systems - the service industry delivering those same innovations and technologies - are not. Today, healthcare systems are still the largest user of fax machines (now upgraded to e-fax servers) as their interoperability platform. Anyone who has interacted with a healthcare system experienced how amazing care teams are, but the hoops one jumps through to get there are anything but innovative, intuitive, or customer-centric. 

> We are today operating healthcare with an inadequate technology infrastructure and more importantly, an inappropriate technology culture.

Second, Healthcare innovation teams embedded within healthcare systems or startups that have healthcare systems as a client often overlook the risks and the uphill battle of conducting impactful innovation within and for healthcare systems. They often make the misguided assumption that the _only_ missing piece to innovate and disrupt healthcare is to develop a cloud solution, hire software engineers, implement Agile methodology, build a mobile application, launch proof-of-concepts, and hope that the solution will scale and transform care operations _in situ_. They often forgo that there are deeper and far more complex peculiarities to healthcare systems; and that healthcare has much deeper troubles that - although could benefit from technology - are not easily discernable to innovation teams and solvable by just a matter of adding a bench of new solutions.

## Future of Information Technology in Healthcare

[Conway famously coined](https://www.melconway.com/Home/pdf/committees.pdf) that the system is designed to mimic the cultural and the communication pathways of the organization building the system. Therefore, if we hope to leverage information technology to improve care for our patients, we need to build the right organizational resources, culture, and capabilities to do so. Healthcare systems must combine the culture, people, and technology to build and deliver a better care experience for patients. Doing the contrary will ultimately result in the same complexity and will only amplify current challenges and costs.

Learning from other industries, the true value of technology is when it becomes an integral part of the ecosystem it is trying to redefine; or in other words when technology _becomes_ the business. So, by taking the approach that for technology to be disruptive we have to build the right organization, the question is not _what_ technology to build, but rather _how_. In other words, we should reflect on our digital transformation not as _a matter of fact_ - i.e. we have a digital transformation office - but rather consider healthcare technology as _a matter of concern_ - i.e. we are organizing ourselves and defining our culture such as to become technology driven.

> Healthcare systems must become technology-first. Technology must be the business.

## Product Engineering as a Foundation.

Because this is uncharted territory with so many opportunities and unknowns, organizations must assemble the talent, agility, and capabilities to innovate fast and drive their own clinical experiences. One key driver that I recommend is for healthcare systems to build the organizational design and the culture that empower its people to leverage technology to build new healthcare infrastructure driven by the same philosophy, approach, and scale that has enabled other players in other industries to become successful and build better care to their patients and communities.

- **Autonomy**. Teams, we call them squads, are fully operational and can independently ship products and make decisions that are autonomous through our CI/CD, reaching the patient.
- Our engineering team is a clinical team. Rather than writing a prescription, our team writes code. We have demonstrated in our recent research that delivering a digital experience can have an impact on a patient's care journey and cost of care. We also [demonstrated](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2757995) that including more sophisticated tools such as AI and Chatbots can help patients make more informed decisions.
- We have invested and continue to invest heavily in automation of our CI/CD, safety, quality and security of our infrastructure on Amazon Web Services (AWS) to make it safer and more rigorous for developers in each squad to build digital care experiences.
- We are a small team but we believe that many others will join us and we welcome collaboration with like-minded groups to collaborate and learn together.
- We focus on care delivery as a Product rather than a project. We do that by measuring the problem and delegating to squads to build their solutions. We are implementing an approach based on [Objectives and Key Results](https://www.whatmatters.com/get-started) (OKRs) to define our goals and the key metrics we want to achieve as an organization through our teams.
- We focus on Experimentation and Data as a Product. And we are in the process of building our Data Mesh architecture to make data a first-class citizen in the product lifecycle and in the measurement of success. We have invested in our Observability (o11y) and our Experimentation Platform, split.io, to build better products.
- We are carefully crafting our clinical engineering culture. I have personally shifted from focusing on engineering, architecture, and design to work on team culture, product vision, technology platform, compliance, security foundations, and managing 1:1 with my tech leads. Our team has so much evolved from our initial premise that we published a few years ago in Health Affairs about [Adopting Agile Principles in Healthcare](https://www.healthaffairs.org/do/10.1377/forefront.20190813.559504).

Not long ago, healthcare organizations used to build their own electronic health records. Brad Crotty and I both came from an organization that used and deployed its own electronic systems. The system, which is the predecessor of the current Electronic Health Records, was built in the 1980s by clinicians such as Warner Slack, Howard Bleich, and Charles Safran to improve safety and availability of information in the clinical setting. It is increasingly important that we don't outsource everything-technology and our experiences are just as important as the entrances to our buildings and services we provide inside. Conversely, the journey of building a culture of engineering in Healthcare has its own challenges. Nonetheless, it is the most rewarding path to build what [Marty Cagan from SVPG coined](https://www.svpg.com/empowered-product-teams/) as Empowered Product Team who can solve hard problems in ways their customers love, yet work for their business.
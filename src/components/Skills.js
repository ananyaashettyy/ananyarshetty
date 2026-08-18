import React from "react";
import { useTheme } from "../contexts/ThemeContext"; 
import "./Skills.css";
import VertexIcon from "./ui/icons/vertex-ai.svg";

const skillCategories = [
  {
    title: "Programming & Development",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ]
  },
  {
    title: "Networking & Systems",
    skills: [
      { name: "Windows Server 2022", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Networking", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDS12E0tSgz9r9R53hbGO7a4o-vD2UPVkK2fStoV4ZxQ&s=10" },
    ]
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Microsoft Azure", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iivtSnoXHEomMtwDDtI9vMeOa0AoGyru2Oy6IoySRQ&s=10" },
      { name: "GCP", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbQ2Fo6hpyI-KS7XzXNCc31ZaMSK_qVFRS-eUVqsgrQ&s=10" },
    ]
  },
  {
    title: "Cloud AI",
    skills: [
      { name: "Azure AI Foundry", icon: "https://dt-cdn.net/hub/AzureAI-3f9f7a71_1_1_1-icon.png" },
      { name: "Google Vertex AI", icon: VertexIcon },
    ]
  },
  {
    title: "DevOps & Cloud Native",
    skills: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "Infrastructure as Code (IaC)", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVlHVFD7hTA4Wy6ur0ps2_yHVES1Pn1fKWerg_pT0lXA&s=10" },
      { name: "Microservices", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRET_fKFtDRuRDWlksksmwJnfnXH-KpD3mEmK43RxI95w&s=10" },
    ]
  },
  {
    title: "Generative AI",
    skills: [
      { name: "Generative AI" , icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAgVBMVEX////+/v4AAAD7+/sEBATp6em1tbVsbGyNjY1OTk7c3NzQ0ND09PTs7OxcXFxGRkaenp4VFRXV1dXx8fFlZWV8fHxDQ0PHx8eEhISvr6+ZmZna2tqmpqa6urphYWFwcHB2dnY2NjZVVVWRkZEwMDAPDw8lJSU7OzsYGBgsLCwfHx8HHDRjAAAPTUlEQVR4nO1dCXuqPBOdkAaQRSiLLIJrrW3//w/8kkyCy9X30xas9Mm5ba8KkhxmySSZBAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODO0EJBUoJEb+/XZc+wdlIQpzdHyPGeRHBT/D6U8xQZlTw+1sik8zCBaV/TF4CFGzLB/K3qAn9o7S0Mu48/hgxLrD203pt4W/ZmOBir60Xa93+dlX6BWFVZFmcmGVNGvbbtekRNJ7tOK8Xzux1Xf92bXpFak8tgWn1lwQmQw+24rwcBn/GKxLRhAlv722s91C8ORwaceQoaagAMbYa0Y51h+i1L40Bgodsujij5D0VHx34jDkMoTKkx/A+sOEoBhaN9ojDENHDBOk8ZI/lpNcyalUMCHgupaST0JHE+FtvtM6fC2zFfQbpRHYQFCeaLrdjFRsBNrEc7GCe2RPnPH+bBWiBv1O7H4AH9e/WzJOd59MjQoKtZSWylRsdMV5l17I+KqmA5OwQDTLLWirjGxe4+rEpD+rLQLqK0yMUChE9MjFyNTJiosKt6K3skzN5ocW98oDfWkjh/VYVvwde+XQpeysxPTUy8TrNLNlHKweOGPHq3yriovFTecDfSWIR00Ol6PM5zcQRrETfM/cAhhsyOJjw/UWcOnN8xRtlEXVkQtuEyPRlVWPmu3sLu56cWlR7MNyQI5U2TIUbvl/lKRw8W3d7tIXJf+lRw+zV2VrRsvBn5sRsOEPTQvvOjfunUvIa6busuGAwOcgk2MrOtPxY0eOo6EBeX8eoKfO8xL8Phe9dCizShaw41r3EmyYLYvH0nR/aaV38dJpwMCsTkzyQ+s1q9mrdj+JMZuJi4bLTN/7ntQ6UkkrFbZeSljj6UbZKXYZgJmpC7dXbN0hxlOdqxOuYZKhusvb8Z5ejVAjachrvLPn5WxVge923yIiOQr3F15Hu344XDB+U25dV5DKJ0T+gkeGYYlRgrxn1kcTyw1cbO2nkW7b9n8QodioaWZHddwS2AeyTcHaBuCQN2j3yOcPUlzFjgMKZilNcMR3YLyNNjLPimpF3svpaz6K7sG9kT1n3j1OvWlvakZ+J1tq0HudOAiFiTxjYcAMfUuOFoaMlO7VdzL27MMcmkMobVFSrnSSBlnVCTL7/LG1fuHYq5l+sWinxIMQ4VqrYsgi/cw05uSwsi2Vvlhb9P8b6ohut/QpNiof33tlASI8QdrHFCOGtkC5XWN09oNoDURpo2aDfOJeYNrw39MJetAmOg5bemfnIK2NyuOwb90/3gvkdKVbrnRbPuZGhG5yVifIW1G3QS/btPQgGA2kk7+Qy6EclaLuaHUzq8Er82U1KX5YMumkYBCoybERTae2DXnRC1jWpI+tIEztPsmiYDqu636HAI7eFKPrV763pFzbn1UciU/HiR6UmW3QHZshBHNG3kAJze0qb0UOItHg7mJhkuEnQZeg+7dDEqCvKXSciaOjPP4n2d3riNfJUqunR2P2gIMSLUGC9RaHY7+JS8zZHvFYBNnePGmrjUbjwzq82kN5sTF2ZQvKuw2BrwnDo/rTs4YDN/4u193suBuXfdO10MrjunYKXLgufhj0Tw2CfRqqTXML5kOnA4MXV4oZmA7SUcjQKnf47G2pE43rh3ClyZk7vxGQASVJHuvo6UC33w6C9fe/ElCqCLZzip08uzLcMCiRmDUBMtR7zCb/8KpUjlj0X8V+l30dMNU/XWwU1ja5jXPmdkitE8+gJsHuIYedC9pKvdDPkGLIactXcCdhf1mz+zMQwoBD1plf8GwaJ54m/LLKyh+cZ3SUxSimq2jXPTfQ4Gj20Wfy/pVU/fCr2Tokdfe3/ndmpIgW/fHzOw33Og5UrjuXSvyKxNF/iCccD+byI4PEzsXepIsQqVHeutLVMD7YeMRdm+QsZUzcSk0NrhHe0cRz+rbhUUwLhqzrhYkD90Bn024gRdBjtTs/ibS/VEYnJAKrvnsL9uJGYcOM0zVUXhPetvAs1V8RQFcdBDAehvZdu2tWqLoyOaFUcEzHZLOWWYsZ/ovDfiLZTxSs29lDcqopi1sLqNPFFTGDeRezhqTc3S0z4ej19J5hNj+NcfS0kdqqKqi0nkBbBE3pFHkyt9VA8/sf+yXu9Qkx6VGDNYvp8xKhcIiUl9vqphj9LIGfMrhHjZ9mz9c5aPHJo4OZ2LJjibNe0XaP7+GLnk8aXiUnHI0OW6SMjq1vdPRRqgLCkeuazPu+V/YfEpH1Og8Fo/ItbvSIt0R/uCpyZEfVM4RaJyY6pIvaEqpjskc0eYL5HiX21Zz79qsQkMevJJKYWOTSqgaq59jkq+sgDuMl5QEfsiSSG89HAlMewhH8sVPzxUZx2y645D3hSiYmfSvn4pZz4+lQic8+yp/4vseeRGCYCUYjUXH8hVdNV865v7Aav+JzE1GyxryaRIyaJeZh082I1N7VjT6mKmO6VKQuL5QQXpRNF9P2kIRuZxMTs3Q7DqTdfpci2KhHAsk/PHZHEZHBRquShVaoyDdlaRfobnHkl6tzxSEzS8FDzrF2jJ5cDV/nFLx8OsyjjIkZldgsmWnuYBirW4ewUsxIOk0NjIiZaYJaplKGVWhwrcpWn2k/ODzH+qGwMZOY8tlu+ym8RNa11fzM+rDIak8T4wWCltC46PpCslcimrBvQGBcxMn9R8W/uJUeYqBS9l5boSaUxEeN1KnWixjqadYiiL51yswput7EnIkaoTs47z6jsMom6QeEROQ8ivIRaWXPIYztJ9UVnqa41GokRCNbKlF4OBNWoaYf0Zq/4KFbwf4iJjtjuaPhXL+Y4IfbSzcOOR2JcYM6F5PlTI3uxZsGo3L2sbPF5zWtYWj+tl9dKDWTTUaiiqE9Qqsp/VSljITtGyGrV3bScgGL/ZhwS4//meyWbSQDniQK8X71XtD8LwDU7YyFGG+02agx1T1ZHAM31wjbMuh0HMVHxdKbzy5mIm/45wf5Qx/ceXmsUxPhbWzdhG+kazgVGg0i3bw32o0fgPGR2fDcjhtOX56OIMizBpmwfyiVoipic0STHJz6PxEQ1E90iry8loAihsa4xwL3qwt1hcv0SsQcQOpR6zXnIMXokFl+aQZYyXepTIpnjEu6Un3xmG4P5u4p2Py4mG0qj8i3tGD2xy1T4obqfz6uKIAfdEPmVxHXRvZ7pkxxxKabfPbEq0rBcLLJFxn+Ky9+U63LaaSaxWIViZfNyId9tvKMJpmeTGLn48ujDs9TgUzukT0tMJXEcZVT+89WTzYnUeSrMP52reCpifRbx94kNVMLlUo3Evl/E3yc2UAmXS/2jEpPxw1ZEQZne/rDv64vgq364xGTD2shiw2FW5IlsYtnX5lHXQ0FwosiaJV0r2/f1CZHLdvPLIcxQEHvbiJj8wx6El5zKTWU//MELXETexkzc0C0dZEmeMFtbJc49FCLJUqQFCF0cYr8QMXgykYN0D14IIu5oi7OudJCFrxRtmJvYw3eHJGwjh3t9vUyxH6+PQ5EA4UbNoz2eGMS4sIMS3JvyfGz0J4DAlSMh2eNz7zkxhl38XG1Q1dNVcSFqIxe87JIHrxbGKsjdAkUqR0D1puA/RwCYNSuH6Gr6GzuwcjY5zlZGhXyEUT+ayC/FHBy2cpjcAunBzEQsFThqe8ra7ymk4xKaN2ucaIrmchX7o3dglTbuOThOb63zpp2zH0HMpHlFVUYqRf9NNpG/4TyEz2CamWV9ziY/xuzt1VLZBu+XltE9jBuH2zHrB2q3y4z9Hi85Yk2h2Lxaemr5h4R05oQVVeQXlBCB5Yq/aZXhNp99yW1TM/jFnbZVjCB+WREv3vsh9THZth5ujfpbEkP/oRwXDb150do/Av964XuMHqKzXyFmYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYDBO4ILuo/S7wwaehzNUAqA+TvQycPWhWvKNnxwv/T76XneOWpABp4X0TErlFFL9BC75/jj7HvTTuQg+d1g9r7t7j2+oeiHTcKnajJGeP6hYrubST1nGaw/2aDJKMS1e7BcDWC7RIqGaEigS8nHWmESPG8pQUHeBarlBl44rP5HbLSjJAj4WAA5v1c0dhBjWonVB82EphAxOnlOa4AO65Ol2BaDWwBy0CR/pJxgE26gMANIVE9tAt2Izl5JBHPH33mQqnphcuAGpJyX1ZpvN1POcSTUQL4AgJW1OAyoB0zmpmoDQVEgmpUFKw4zXMhBb3KcpbWKQi2D45/xXfIl/nf8Q5NZsoayBLMTiyDjnBaT7PPQzqNxgzZIpg2SSB3YOWxdo4EXBsoDJIM+7EiJy3cR2tmWSuDBv/Nm2XTlVELsNrdyt724LexaztiwL8F3Xt+PU5TXxtmWbNmXJ5jF/lcdyC0mujyyAuIZ6k6TgvxWM0LxxWcqgrW0HIE+Csq6p04I348zdKs0SuLJpyE+JAVTTedpuWFW3mXhc2KRI6zpslsW0KHNv63ihLzTG92Ze3jKvyrc2V8u8Cj3bZXZeLObuik094DdFKquXed6m2dbp0o1L1jSBGwKEZVKVAGUR296WTH0IxWMBnJTGbvw2yBpprj5huSq4cvguv6d+STceNBWsyraZuxUX57LwMpjnBCZ2zkVVReK5C6HDX8YtpI6dU9uFVcKNR+zuD94igWpLWV7xarvbaLWKYkpzG9oll1j1sVpG/KZJidUVt8kki4fghe6uKJscirLY8D+Uq3zcQL0FRkph136eTMFzQrKfc71hTR1zjQ3yAoKmBn9Z5FxjYeVzDyI2iWMZl12b8y8UiyBYtSHzyzlw3YN0Tb2MsbAouZyF/c0dsQlZuxxmUTtXxWLjFMUWkpqWkywO4qjypyuaT6astrmeOgXJN4m9ibiNTSd2y6VZrFov22yD7SZjvhu0NZRzdJOpG+3fuI1FXNuKyYSLBFgdxrPZ2gmK2UZYU1IH1J0tA1qJ2+YtvYG8/dG6LtXSHF6fNTGnNaBH24upZSTk+Fvy6NF6OHIoj6jD5J8mrT9gDEBxWwCgettwbLFVcKBjEtmIY4uLgUa3JRxGKl17jh+pJp3KVxR3xtPRB+BGBKS/B2yfg2I7TPUCRAwxMHY6VE7ZIsY/h5UdREd/RD11t4tQMEYDtX13F3LRLgoTNGXQcyz4XtE901Pqhl5kc3Tz5fp2OMSRpPuPKKES3FtMHUEVxLc6AsVnkqvgUEVruLkVPqz3dvwPkZK6x1Z0JxkAAAAASUVORK5CYII=" },
      { name: "LLMs" , icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYWH8ytUznC5GqdiKW4SwYKhO-jNjW8Aef2VjlFiI3w&s=10"},
      { name: "LangChain", icon: "https://cdn.jsdelivr.net/npm/simple-icons@14.11.0/icons/langchain.svg" },
      { name: "Agentic AI" , icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTh3kceBJI8Y7RVpnwbtvxDAwIL1kRsrwNfGMLq7AMA&s=10"},
    ]
  },
  {
    title: "AIOps & Operations",
    skills: [
      { name: "AIOps" , icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIajSHtUAOrmDH_4bCYwIRh1RIpcm2omuqlJ_W35HO0w&s=10" },
      { name: "Monitoring", icon: "https://static.vecteezy.com/system/resources/previews/025/453/810/non_2x/monitoring-icon-simple-element-from-internet-security-collection-creative-monitoring-icon-for-web-design-templates-infographics-and-more-vector.jpg" },
      { name: "Observability", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
    ]
  },
  {
    title: "IT Operations",
    skills: [
      { name: "ITSM", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6e69xnqW5sfA1c3azu1YR5h8hq6tA1ISqUO64g-534rD5zIG5HrVnt7o&s=10" },
      { name: "ServiceNow", icon: "https://1000logos.net/wp-content/uploads/2021/09/ServiceNow-Logo.png" },
      { name: "Jira", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPJu5uLAJj-39qLgIJv501qaQlYzSPa-q1mLEFqUrJA&s=10" },
      { name: "DWP", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImcY6bWfQuMGz18i1kFISdLxMUpuIGMzJVP-lFlPoCA&s=10" },
    ]
  },
  {
    title: "Database & Backend",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ]
  }
];

const Skills = () => {
  const { isDark } = useTheme();

  const mid = Math.ceil(skillCategories.length / 2);
  const leftCategories = skillCategories.slice(0, mid);
  const rightCategories = skillCategories.slice(mid);

  return (
    <section id="skills" className={`skills-section ${isDark ? "dark" : "light"}`}>
      <h2>Key Skills</h2>
      <div className="skills-columns">
        {/* Left Column */}
        <div className="skills-column">
          {leftCategories.map((category, i) => (
            <div key={i} className={`skill-category-box ${isDark ? "dark" : "light"}`}>
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className={`skill-card ${isDark ? "dark" : "light"}`}>
                    {skill.icon && <img src={skill.icon} alt={skill.name} className="skill-icon" />}
                    <div className={`skill-name ${isDark ? "dark" : "light"}`}>{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="skills-column">
          {rightCategories.map((category, i) => (
            <div key={i} className={`skill-category-box ${isDark ? "dark" : "light"}`}>
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className={`skill-card ${isDark ? "dark" : "light"}`}>
                    {skill.icon && <img src={skill.icon} alt={skill.name} className="skill-icon" />}
                    <div className={`skill-name ${isDark ? "dark" : "light"}`}>{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

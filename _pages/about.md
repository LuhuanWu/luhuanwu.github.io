---
layout: about
title: About
permalink: /
#subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.

profile:
  align: left
  image: LuhuanWu-Photo.JPG
  image_circular: false # crops the image to make it circular
  cv_pdf: assets/pdf/LuhuanWu_CV.pdf # shows a CV icon next to the social links
  more_info: >
    <p>Assistant Professor</p>
    <p>Applied Mathematics & Statistics</p>
    <p>Johns Hopkins University</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

## About Me {#about}

I am an assistant professor at Johns Hopkins University in the [Department of Applied Mathematics and Statistics](https://engineering.jhu.edu/ams/), with an affiliation in the [Data Science and AI Institute](https://ai.jhu.edu/).

My research focuses on generative modeling, sampling, probabilistic modeling, and scientific applications with a recent focus on biophysics. I am also a core member of [Reciprocal Space Station](https://rs-station.github.io/), an open-source consortium for structural biology software.

Before JHU, I was an associate research scientist in the [Center for Computational Mathematics](https://www.simonsfoundation.org/flatiron/center-for-computational-mathematics/) at the Flatiron Institute. I did my Ph.D. in [Statistics](https://stat.columbia.edu/) at Columbia University, working with [John Cunningham](https://sites.stat.columbia.edu/cunningham/) and [David Blei](https://www.cs.columbia.edu/~blei/). Before that, I received an M.S. in [Data Science](https://datascience.columbia.edu/) also from Columbia, and a B.S. in [Mathematics](https://njunju.nju.edu.cn/EN/7f/77/c7136a163703/page.htm) from Nanjing University.

_Prospective PhD students:_ If you are interested in working with me and are a current or admitted student at JHU, please feel free to email me. Otherwise, consider applying to the [AMS graduate program](https://engineering.jhu.edu/ams/academics/graduate-studies/) or the [DSAI program](https://ai.jhu.edu/education/).

## Research Themes {#research}

My research develops methods in generative modeling, sampling, and probabilistic inference, and applies them to problems in the sciences, with a focus on structural biology and biophysics. A common thread is a <em class="hl">probabilistic lens</em>: casting generative models as domain priors, encoding assumptions via a generative formulation, or turning domain knowledge into data-driven priors. Solving the problem then reduces to probabilistic learning and inference, which often accommodates uncertainty quantification.

Some of my recent works include

- <span class="hl">Generative models as priors for scientific inverse problems</span>, e.g. protein design with RFDiffusion [\[1\]](https://proceedings.neurips.cc/paper_files/paper/2023/hash/63e8bc7bbf1cfea36d1d1b6538aecce5-Abstract-Conference.html) and recovering molecular structure from experimental data with AlphaFold3 [\[2\]](https://arxiv.org/abs/2602.05285)
- <span class="hl">Sampling</span>, e.g. algorithms for complex, multi-modal distributions built on modern diffusion paradigms and classical Monte Carlo and annealing ideas \[[3](https://proceedings.neurips.cc/paper_files/paper/2025/hash/6490ab6ef8eb7116c6c1889795d21748-Abstract-Conference.html),[4](https://openreview.net/pdf?id=I9dPSFULLI)\]
- <span class="hl">Probabilistic modeling, robustness, and uncertainty</span>, e.g. invariance across environments [\[5\]](https://arxiv.org/abs/2506.22675) and data-driven uncertainty quantification [\[6\]](https://proceedings.mlr.press/v238/wu24e.html)

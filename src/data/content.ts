export const education = [
  {
    degree: 'MSc Applied Computational Science & Engineering',
    institution: 'Imperial College London',
    institutionUrl: 'https://www.imperial.ac.uk',
    logo: '/images/logos/imperial.png',
    period: '2026 – 2027',
    location: 'London, United Kingdom',
    upcoming: false,
    highlights: [
      'Specialisation in Machine Learning, Numerical Methods, Probability & Statistics and Parallel Programming.',
    ],
    achievements: [] as string[],
  },
  {
    degree: 'B.E. (Hons.) Mechanical Engineering',
    institution: 'Birla Institute of Technology and Science (BITS) Pilani, Pilani Campus',
    institutionUrl: 'https://www.bits-pilani.ac.in/pilani/mechanical-engineering/',
    logo: '/images/logos/bits.png',
    period: '2021 – 2025',
    location: 'Pilani, Rajasthan, India',
    upcoming: false,
    highlights: [
      'Coursework: Computational Fluid Dynamics, Gas Dynamics, Heat Transfer, Numerical Methods, Applied Mathematics, Fluid Mechanics',
      'Thesis: Optimal Recombination Algorithms for Quad-Dominant Meshes — conducted at IISc under Prof. Aravind Balan',
      'Positions: Core Member Student Faculty Council, Team Lead Sally Robotics, Joint Coordinator Photog Club',
    ],
    achievements: [
      'JEE Mains — Top 1% (2021)',
      'JEE Advanced — Top 5% (2021)',
      'INSPIRE-SHE Scholarship — awarded to top 1% of board exam scorers (2021)',
      'AP Calculus BC — Grade 5 (highest) (2021)',
    ],
  },
]

export const experience = [
  {
    role: 'R&D Sourcing',
    company: 'ideaForge',
    companyUrl: 'https://www.ideaforge.co.in/',
    logo: '/images/logos/ideaforge.png',
    period: 'Oct 2025 – Present',
    location: 'India',
    current: true,
    bullets: [
      'Automated internal workflows, performance reports and documentation processes to streamline development cycles across the engineering team.',
      'Responsible for design of in-house propeller, leading the concept development, CAD design, and performance assessment through simulations.',
      'Coordinating with vendors and composite manufacturers to ensure efficient and timely fabrication of UAV components and propellers. Assisting in the technical assessment of motors and material quality.',
    ],
  },
  {
    role: 'Undergraduate Thesis — Computational AeroSciences Lab',
    company: 'Indian Institute of Science (IISc)',
    companyUrl: 'https://aero.iisc.ac.in/',
    logo: '/images/logos/iisc.png',
    logoInvert: true,
    advisor: 'Dr. Aravind Balan',
    period: 'Aug 2024 – Jan 2025',
    location: 'Bangalore, India',
    current: false,
    bullets: [
      'Developed optimal mesh recombination algorithm converting triangular meshes into quad-dominant configurations to improve accuracy in anisotropic flow simulations, particularly boundary layer resolution.',
      'Implemented priority-based greedy selection algorithm in Python with MPI parallelization, reducing degrees of freedom by 23%, enabling scalable processing for large meshes.',
      'Achieved a 93% quad-conversion rate through optimized element-selection strategy, significantly improving mesh quality for capturing directional flow features.',
      'Built a custom mesh file format converter, enabling seamless integration with NETGEN and gmsh for cross-platform validation.',
    ],
  },
  {
    role: 'Summer Intern — UR Rao Satellite Centre',
    company: 'Indian Space Research Organization (ISRO)',
    companyUrl: 'https://www.ursc.gov.in/',
    logo: '/images/logos/isro.png',
    period: 'May 2024 – Jul 2024',
    location: 'Bangalore, India',
    current: false,
    bullets: [
      'Contributed to the conceptualization and design of the novel indigenous Roll-Out Solar Array (ROSA) mechanism for future ISRO missions requiring compact, high-power deployment.',
      'Designed deployment mechanisms in Siemens NX and modeled tube dynamics in MATLAB to estimate motor torque and reduce blossoming and telescoping effects.',
      'Developed tensioning and roller mechanisms that mitigated telescoping errors and improved deployment stability during stowage and retraction.',
    ],
  },
  {
    role: 'Research Intern',
    company: 'Indian Institute of Technology Bombay (IIT Bombay)',
    companyUrl: 'https://www.che.iitb.ac.in/',
    logo: '/images/logos/iitb.png',
    advisor: 'Dr. Amol Subhedar',
    period: 'May 2023 – Aug 2023',
    location: 'Mumbai, India',
    current: false,
    description: 'Formulated an improved surface tension forcing scheme for multiphase flow simulations within a diffuse interface framework, based on the Lattice Boltzmann Method (LBM) and perturbation analysis of the Allen–Cahn equation.',
    venue: 'Presented at CompFlu 2023, IIT Madras',
    venueUrl: 'https://ge.iitm.ac.in/compflu-2023/wp-content/uploads/2023/12/Abstract%20booklet%20COMPFLU%20v10.pdf#page=355',
    bullets: [
      'Performed perturbation analysis of the Allen–Cahn phase-field equation to correct surface-tension forcing errors in Lattice Boltzmann multiphase simulations, and implemented the models in C++.',
      'Derived correction factors up to O(ε²α²) and validated them on bubble tests, reducing Laplace pressure error from 1.7% to < 0.1% (continuum surface tension scheme) and from 8% to 0.5% (chemical potential scheme).',
      'Manuscript currently under preparation.',
    ],
  },
]

export const siteConfig = {
  name: 'Aditya Jaiswal',
  title: 'Mechanical Engineer',
  subtitle: 'Computational Mathematics · Fluid Dynamics · High-Performance Computing',
  location: 'India',
  institution: 'BITS Pilani, Pilani Campus',
  email: 'adi1709.jaiswal@gmail.com',
  github: 'https://github.com/AdityaJaiswal17',
  linkedin: 'https://www.linkedin.com/in/aditya-jaiswal-bits',
  cvUrl: '/files/Aditya_Jaiswal_MS_CV.pdf',
  profilePic: '/images/self_upload/profile_pic.JPG',
}

export const aboutText = [
  `I am Aditya Jaiswal, a graduate in Mechanical Engineering from the prestigious <a href="https://www.bits-pilani.ac.in/pilani/mechanical-engineering/" target="_blank" rel="noopener noreferrer">Birla Institute of Technology and Science (BITS) Pilani, Pilani campus</a>. My academic interests lie at the intersection of applied mathematics, numerical methods, and high-performance computing, with a particular focus on computational fluid dynamics and scientific simulation.`,
  `Over the course of my undergraduate studies, I have pursued research experiences that integrate theoretical modeling with practical computational frameworks. During my undergraduate thesis at the <a href="https://aero.iisc.ac.in/" target="_blank" rel="noopener noreferrer">Indian Institute of Science (IISc)</a>, I worked on developing algorithms for mesh recombination from triangular meshes into quadrilateral and mixed-element meshes, tailored for compressible flow simulations and boundary layer resolution under <a href="https://aero.iisc.ac.in/people/aravind-balan/" target="_blank" rel="noopener noreferrer">Prof. Aravind Balan</a>. This work involved using mesh generation and adaptation tools such as NETGEN and Gmsh, and included designing a format converter between <code>.su2</code> and <code>.vol</code> file types to facilitate algorithm validation.`,
  `Previously, as a research intern at the <a href="https://www.che.iitb.ac.in/" target="_blank" rel="noopener noreferrer">Indian Institute of Technology Bombay (IIT Bombay)</a> under <a href="https://www.che.iitb.ac.in/faculty-page/amol-subhedar" target="_blank" rel="noopener noreferrer">Prof. Amol Subhedar</a>, I formulated an improved surface tension forcing scheme for multiphase flow simulations within a diffuse interface framework. This work, based on the Lattice Boltzmann Method (LBM) and perturbation analysis of the Allen–Cahn equation, was presented at COMPFLU 2023.`,
  `Additionally, during my internship at the <a href="https://www.ursc.gov.in/" target="_blank" rel="noopener noreferrer">Indian Space Research Organization (ISRO)</a>, I contributed to the mechanical and computational design of a novel roll-out solar array (ROSA) mechanism, including dynamic modeling and motor torque analysis.`,
  `I am currently developing a parallel LBM solver in C++ for low Mach number airfoil simulations, with OpenMP-based parallelization and planned MPI extension. Through these projects, I have developed strong proficiency in computational physics, algorithm development, and scientific programming.`,
]

export const researchHighlights = [
  {
    institution: 'IIT Bombay',
    role: 'Research Intern',
    advisor: 'Prof. Amol Subhedar',
    topic: 'Multiphase Flow — Lattice Boltzmann Method',
    description: 'Formulated an improved surface tension forcing scheme for multiphase flow simulations within a diffuse interface framework, based on the LBM and perturbation analysis of the Allen–Cahn equation.',
    venue: 'Presented at COMPFLU 2023',
    tags: ['LBM', 'Multiphase Flow', 'Allen-Cahn', 'C++'],
    images: [
      { src: '/images/self_upload/Phase_field_ST_0.0001.png', caption: 'Phase field contours for a bubble suspended in a symmetrical system.' },
      { src: '/images/self_upload/ST_0.0001.png', caption: 'Spurious currents induced due to errors in surface tension forcing scheme.' },
    ],
    link: 'https://ge.iitm.ac.in/compflu-2023/wp-content/uploads/2023/12/Abstract%20booklet%20COMPFLU%20v10.pdf#page=355',
  },
  {
    institution: 'ISRO (URSC)',
    role: 'Engineering Intern',
    advisor: '',
    topic: 'Roll-Out Solar Array (ROSA) Mechanism',
    description: 'Contributed to the mechanical and computational design of a novel roll-out solar array mechanism, including dynamic modeling and motor torque analysis.',
    venue: '',
    tags: ['Mechanical Design', 'Dynamic Modeling', 'Solar Arrays'],
    images: [],
    link: 'https://www.ursc.gov.in/',
  },
]

export const fdmProjects = [
  {
    id: '1d-heat',
    title: '1D Heat Equation Solver',
    excerpt: 'Finite difference solver for the 1D steady-state heat diffusion equation with serial and OpenMP parallel implementations.',
    tags: ['FDM', 'Heat Transfer', 'OpenMP', 'C++'],
    github: 'https://github.com/AdityaJaiswal17/Finite_Difference_Methods/blob/main/1D_HeatDiffusion_FDM%20/1D_Heat_Diff.cpp',
    images: [
      { src: '/images/self_upload/fdm/1D_heat_diffusion_1.png', caption: 'Temperature profile: BCs at 100.0 and 1000.0.' },
      { src: '/images/self_upload/fdm/1D_heat_diffusion_2.png', caption: 'Temperature profile: BCs at 100.0 and 100.0.' },
    ],
    method: 'fdm' as const,
    fullContent: {
      title: '1D Steady-State Heat Diffusion Solver (C++ with OpenMP)',
      description: `This project implements a **finite difference method (FDM)** solver for the **1D steady-state heat diffusion equation**. The code is written in **C++** and includes both a **serial implementation** and a **parallel implementation** using **OpenMP**, allowing for performance comparison between the two approaches.

After execution, the solver generates an \`output.dat\` file. Boundary conditions can be specified in the section marked \`// initialization\` within the code. The solution can be visualized using **gnuplot** or any other plotting tool.

**Results:** The temperature profile is linear (fig. 1 and fig. 2), which is consistent with the analytical solution for the 1D steady-state heat equation — validating the code for both boundary condition configurations.`,
      compilation: `export OMP_NUM_THREADS=<number_of_threads>\ng++ 1D_Heat_Diff.cpp -fopenmp -o heat_diff\n./heat_diff`,
      outputStructure: [
        'Column 1: Node index (i = 1, 2, 3, …, Lx)',
        'Column 2: Temperature values — parallel implementation',
        'Column 3: Temperature values — serial implementation',
        'Column 4: Relative difference (%) between parallel and serial',
      ],
      notes: 'The linear temperature profile is consistent with the analytical solution for the 1D steady-state heat equation, validating the code.',
    },
  },
  {
    id: '2d-heat',
    title: '2D Heat Equation Solver',
    excerpt: '2D steady-state heat diffusion using central finite differences with iterative convergence and OpenMP parallelization.',
    tags: ['FDM', 'Heat Transfer', '2D', 'OpenMP', 'C++'],
    github: 'https://github.com/AdityaJaiswal17/Finite_Difference_Methods/blob/main/2D_HeatDiffusion_FDM/2D_heat_diff.cpp',
    images: [
      { src: '/images/self_upload/fdm/2D_heat_diffusion_1.png', caption: 'Temperature contour from our solver.' },
      { src: '/images/self_upload/fdm/2D_heat_diffusion_2.jpg', caption: 'Reference contour for validation.' },
    ],
    method: 'fdm' as const,
    fullContent: {
      title: '2D Steady-State Heat Diffusion Solver (C++ with OpenMP)',
      description: `Implements an FDM solver for the **2D steady-state heat diffusion equation** (Laplace equation). The governing equation for steady-state heat conduction in two dimensions is:

$$\\frac{\\partial^2 T}{\\partial x^2} + \\frac{\\partial^2 T}{\\partial y^2} = 0$$

where $T(x, y)$ represents the temperature field. Using **central finite differences**, the discretized form at an interior grid point $(i, j)$ is:

$$T_{i,j} = \\frac{1}{2(1+\\zeta)} \\Big( T_{i+1,j} + T_{i-1,j} + \\zeta \\big(T_{i,j+1} + T_{i,j-1}\\big) \\Big), \\quad \\zeta = \\left(\\frac{\\Delta x}{\\Delta y}\\right)^2$$

The iterative scheme runs until convergence (error < 10⁻⁷). Temperature gradients are computed as:

$$\\frac{\\partial T}{\\partial x}\\bigg|_{i,j} \\approx \\frac{T_{i+1,j} - T_{i-1,j}}{2\\Delta x}, \\qquad \\frac{\\partial T}{\\partial y}\\bigg|_{i,j} \\approx \\frac{T_{i,j+1} - T_{i,j-1}}{2\\Delta y}$$

**Boundary conditions:** Top wall = 600, Bottom wall = 900, Left wall = 400, Right wall = 800. All walls are also insulated.

**Gnuplot surface/contour visualization:**
\`\`\`gnuplot
set pm3d map
set size ratio 1.0
splot 'output_serial.dat' using 1:2:3 with image
\`\`\`

**Results:** The temperature contour obtained with our code matches the reference solution for the same boundary conditions, validating the implementation.`,
      compilation: `export OMP_NUM_THREADS=<number_of_threads>\ng++ 2D_Heat_Diff.cpp -fopenmp -o heat_diff_2d\n./heat_diff_2d`,
      outputStructure: [
        'output_parallel.dat — parallel implementation result',
        'output_serial.dat — serial implementation result',
        'Column 1–2: Node indices (i, j)',
        'Column 3: Temperature T(i,j)',
        'Column 4: ∂T/∂x gradient',
        'Column 5: ∂T/∂y gradient',
      ],
      notes: 'Similarity between our contour and the reference solution validates the code.',
    },
  },
  {
    id: 'lid-driven-cavity',
    title: 'Lid-Driven Cavity',
    excerpt: 'Streamfunction–vorticity FDM solver for 2D incompressible Navier–Stokes equations in a lid-driven cavity, validated against Ghia et al. (1982).',
    tags: ['FDM', 'Navier-Stokes', 'Cavity Flow', 'OpenMP', 'C++'],
    github: 'https://github.com/AdityaJaiswal17/Finite_Difference_Methods/tree/main/Lid_Driven_Cavity',
    images: [
      { src: '/images/self_upload/fdm/peclet_num.jpg', caption: 'Central differencing scheme vs Upwind scheme for Pe > 2.' },
      { src: '/images/self_upload/fdm/validation_ux.png', caption: 'U velocity at x=0.5 vs Ghia et al. (Re=100).' },
      { src: '/images/self_upload/fdm/validation_vy.png', caption: 'V velocity at y=0.5 vs Ghia et al. (Re=100).' },
      { src: '/images/self_upload/fdm/lid_driven_fdm_re50.png', caption: 'Velocity contours at Re = 50.' },
      { src: '/images/self_upload/fdm/lid_driven_fdm_re100.png', caption: 'Velocity contours at Re = 100.' },
      { src: '/images/self_upload/fdm/lid_driven_fdm_re200.png', caption: 'Velocity contours at Re = 200.' },
    ],
    method: 'fdm' as const,
    fullContent: {
      title: 'Lid-Driven Cavity Solver (C++ with OpenMP)',
      description: `Solves the **2D incompressible Navier–Stokes equations** using the **streamfunction–vorticity formulation**, following the approach described in [IIST (2010)](https://old.iist.ac.in/sites/default/files/people/psi-omega.pdf).

**Governing equations:**

Vorticity transport:
$$\\frac{\\partial \\omega}{\\partial t} + u \\frac{\\partial \\omega}{\\partial x} + v \\frac{\\partial \\omega}{\\partial y} = \\frac{1}{Re} \\left( \\frac{\\partial^2 \\omega}{\\partial x^2} + \\frac{\\partial^2 \\omega}{\\partial y^2} \\right)$$

Streamfunction–vorticity relation:
$$\\nabla^2 \\psi = -\\omega$$

Velocity components from streamfunction:
$$u = \\frac{\\partial \\psi}{\\partial y}, \\quad v = -\\frac{\\partial \\psi}{\\partial x}$$

**Boundary conditions:** Top wall (lid) moves at constant x-velocity. All other walls use no-slip conditions.

**Upwind scheme vs Central Differencing:** During discretization, the **Upwind scheme** is used instead of Central Differencing because it correctly accounts for the directional influence of convective disturbances. The Peclet number governs this choice:

$$Pe = \\frac{U L}{\\Gamma}$$

When **Pe > 2**, the Central Differencing Scheme becomes unstable and the Upwind scheme must be used. The code checks the Peclet number at each node and sets direction coefficients accordingly.

**Validation:** Results compared against [Ghia et al. (1982)](http://www.msaidi.ir/upload/Ghia1982.pdf?i=1) benchmark data. The velocity profiles at cavity midlines and the location of the primary vortex agree with published literature values across Re = 50, 100, and 200.

**Gnuplot velocity contour plot:**
\`\`\`gnuplot
set pm3d map
set size ratio 1.0
sp 'output_parallel.dat' using 1:2:7 with image
\`\`\``,
      compilation: `# Serial\ng++ lid_driven_cavity_serial.cpp -o cavity_serial\n./cavity_serial\n\n# Parallel\nexport OMP_NUM_THREADS=<threads>\ng++ lid_driven_cavity_parallel.cpp -fopenmp -o cavity_parallel\n./cavity_parallel`,
      outputStructure: [
        'output_parallel.dat & output_serial.dat — full field data',
        'Columns 1–2: Grid indices (i, j)',
        'Column 3: Streamfunction ψ',
        'Column 4: Vorticity ω',
        'Columns 5–6: Velocity components (u, v)',
        'Column 7: Resultant velocity magnitude',
        'U-Re_x=0.5_parallel.dat — u-velocity along vertical centerline (x=0.5)',
        'V-Re_x=0.5_parallel.dat — v-velocity along horizontal centerline (y=0.5)',
      ],
      notes: 'Primary vortex location and displacement agrees with theory across Re = 50, 100, and 200.',
    },
  },
]

export const lbmProjects = [
  {
    id: 'couette-flow',
    title: 'Couette Flow',
    excerpt: 'Lattice Boltzmann simulation of Couette flow using D2Q9 BGK model, validated against the analytical linear velocity profile.',
    tags: ['LBM', 'D2Q9', 'BGK', 'C++', 'Couette Flow'],
    github: 'https://github.com/AdityaJaiswal17/Lattice_Boltzmann_Method/blob/main/CouetteFlow/CouetteFlow.cpp',
    images: [
      { src: '/images/self_upload/lbm/couette_ani.gif', caption: 'Couette flow velocity field animation.' },
      { src: '/images/self_upload/lbm/Validation_Couette.png', caption: 'Computed vs analytical solution.' },
    ],
    method: 'lbm' as const,
    fullContent: {
      title: 'Couette Flow Simulation using Lattice Boltzmann Method (LBM)',
      description: `Simulates the **Couette flow** problem — a fundamental CFD benchmark where the top plate moves at constant velocity $U_0$ in the x-direction and the bottom plate is stationary. Uses the **D2Q9 lattice** with the **BGK collision operator**.

**Mathematical Formulation:**

The LBM BGK equation (Boltzmann transport with simplified collision):
$$f_i(\\mathbf{x} + \\mathbf{c}_i \\Delta t, t + \\Delta t) - f_i(\\mathbf{x}, t) = -\\frac{\\Delta t}{\\tau} \\big( f_i(\\mathbf{x}, t) - f_i^{eq}(\\mathbf{x}, t) \\big)$$

where $f_i$ is the particle distribution function, $f_i^{eq}$ is the equilibrium distribution, $\\tau$ is the relaxation time, and $\\mathbf{c}_i$ are the discrete lattice velocities.

The velocity field is extracted using:
$$\\mathbf{u} = \\frac{\\sum_i f_i \\mathbf{c}_i}{\\rho}$$

**Boundary conditions:**
- Bottom wall (y = 0): Stationary — no-slip condition
- Top wall (y = H): Moves with constant velocity $U_0$ in the x-direction
- Left/Right boundaries: Periodic (simulates an infinite channel)

Note: Boundary conditions in LBM are treated differently from conventional methods using the bounce-back scheme.

**Analytical validation:**

On solving the Navier–Stokes equations for Couette flow, the analytical solution is:
$$u_y = C_1 y$$
where $C_1$ is determined from the top-wall boundary condition (velocity at y = h).

The simulation runs for a user-controlled number of iterations (\`last_itr\`) and saves output at regular intervals (\`save\`). A final **test file** extracts velocity values along the vertical line $x = L_x - 2$ for direct comparison with the analytical solution.`,
      compilation: `g++ CouetteFlow.cpp -o couette\n./couette`,
      outputStructure: [
        'Output folder: output/',
        'Files: output_t<time>.dat at regular save intervals',
        'Columns: i-index, j-index, uₓ, uᵧ, |u|, ρ',
        'test file: velocity profile along x = Lx–2 for analytical validation',
      ],
      notes: 'Computed velocity profile matches the analytical linear solution for Couette flow, validating the LBM formulation.',
    },
  },
  {
    id: 'poiseuille-flow',
    title: 'Poiseuille Flow',
    excerpt: 'Two variants of Poiseuille flow (gravity-driven via Guo forcing and pressure-driven via density BCs) both producing the expected parabolic velocity profile.',
    tags: ['LBM', 'D2Q9', 'BGK', 'Guo Forcing', 'C++'],
    github: 'https://github.com/AdityaJaiswal17/Lattice_Boltzmann_Method/tree/main/PoisuelleFlow',
    images: [
      { src: '/images/self_upload/lbm/gravity_driven.gif', caption: 'Gravity-driven Poiseuille flow animation.' },
      { src: '/images/self_upload/lbm/gravity_driven_U_profile.png', caption: 'Gravity-driven velocity profile (parabolic).' },
      { src: '/images/self_upload/lbm/pressure_driven.gif', caption: 'Pressure-driven Poiseuille flow animation.' },
      { src: '/images/self_upload/lbm/pressure_driven_U_profile.png', caption: 'Pressure-driven velocity profile (parabolic).' },
      { src: '/images/self_upload/lbm/validation_poisuelleGrav.png', caption: 'Gravity-driven: computed vs analytical.' },
      { src: '/images/self_upload/lbm/validation_poisuelleFlow.png', caption: 'Pressure-driven: computed vs analytical.' },
    ],
    method: 'lbm' as const,
    fullContent: {
      title: 'Poiseuille Flow using Lattice Boltzmann Method',
      description: `Two different driving mechanisms for Poiseuille flow, both solved with the **D2Q9 Lattice BGK model**. The base LBM equation with forcing is:

$$f_i(\\mathbf{x}+\\mathbf{c}_i \\Delta t, t + \\Delta t) - f_i(\\mathbf{x}, t) = -\\frac{1}{\\tau}\\left( f_i - f_i^{eq} \\right) + F_i$$

where $\\nu = c_s^2 (\\tau - \\tfrac{1}{2})$ and $c_s^2 = \\tfrac{1}{3}$.

---

**1. Gravity-Driven Poiseuille Flow**

Flow induced by a **constant gravitational body force** in the x-direction using the **[Guo forcing scheme (2002)](https://journals.aps.org/pre/abstract/10.1103/PhysRevE.65.046308)**:

$$F_i = \\left(1 - \\tfrac{1}{2\\tau}\\right) w_i \\left[\\frac{\\mathbf{c}_i - \\mathbf{u}}{c_s^2} + \\frac{(\\mathbf{c}_i \\cdot \\mathbf{u})}{c_s^4}\\mathbf{c}_i\\right] \\cdot \\rho \\mathbf{g}$$

Macroscopic velocity recovery with forcing: $\\mathbf{u} = \\frac{1}{\\rho}\\sum_i f_i \\mathbf{c}_i + \\frac{\\Delta t}{2} \\mathbf{g}$

Boundary conditions: No-slip (bounce-back) on top/bottom walls; periodic left/right.

Simulation parameters: Re = 100, domain 401×41, gravity $g_x = 1.25 \\times 10^{-5}$, $\\nu = 0.1$.

Analytical solution: $u(y) = \\frac{\\rho g}{2\\mu} y(H-y), \\quad u_{\\text{max}} = \\frac{\\rho g H^2}{8\\mu}$

---

**2. Pressure-Driven Poiseuille Flow**

Flow driven by a **pressure gradient** applied through a density difference at inlet and outlet. The force term vanishes ($F_i = 0$) — pressure is established via:

- Left wall (inlet): $\\rho = 1.0 + \\Delta\\rho/2$
- Right wall (outlet): $\\rho = 1.0 - \\Delta\\rho/2$

Since $P = \\rho c_s^2$, a density difference $\\Delta\\rho$ corresponds to a pressure difference $\\Delta P = \\Delta\\rho \\cdot c_s^2$.

Boundary conditions: No-slip on top/bottom; pressure BCs at left/right.

Simulation parameters: Re = 100, domain 501×51, $\\Delta\\rho = 0.03$ → $\\Delta P = 0.01$, $\\nu = 0.05$.

Analytical solution: $u(y) = \\frac{1}{2\\mu}\\frac{\\Delta P}{L} y(H-y), \\quad u_{\\text{max}} = \\frac{\\Delta P H^2}{8\\mu L}$

---

**Conclusion:** Both driving mechanisms reproduce the **expected parabolic velocity distribution**, validated against their respective analytical solutions. The gravity-driven approach uses body force in the collision step; the pressure-driven approach uses density boundary conditions.`,
      compilation: `# Gravity-driven\ng++ gravity_driven.cpp -o poiseuille_grav\n./poiseuille_grav\n\n# Pressure-driven\ng++ pressure_driven.cpp -o poiseuille_pres\n./poiseuille_pres`,
      outputStructure: [
        'Output folder: output/ — files at each save interval',
        'Columns: i-index, j-index, uₓ, uᵧ, |u|, ρ',
      ],
      notes: 'Both variants converge to the parabolic profile, agreeing with analytical solutions.',
    },
  },
  {
    id: '1d-heat',
    title: '1D Heat Conduction',
    excerpt: 'Transient 1D heat conduction using LBM with D1Q3 lattice and BGK operator, evolving until steady-state is reached.',
    tags: ['LBM', 'D1Q3', 'BGK', 'Heat Transfer', 'OpenMP', 'C++'],
    github: 'https://github.com/AdityaJaiswal17/Lattice_Boltzmann_Method/blob/main/1D_HeadConduction_LBM/1D_heat_diff.cpp',
    images: [
      { src: '/images/self_upload/lbm/1d_heat_lbm.gif', caption: '1D heat diffusion animation (transient evolution).' },
      { src: '/images/self_upload/lbm/heat_1d_lbm.png', caption: 'Steady-state temperature profile matches analytical solution.' },
    ],
    method: 'lbm' as const,
    fullContent: {
      title: '1D Heat Conduction using Lattice Boltzmann Method (LBM)',
      description: `Implements LBM with a **D1Q3 lattice** and **BGK collision operator** for **transient 1D heat conduction**. The solver is written in **C++ with OpenMP** and outputs the temperature distribution over time until steady-state is reached.

LBM is a **mesoscopic numerical method** that tracks discrete distribution functions along lattice directions. For heat conduction, the distribution function is related to **temperature** rather than fluid density.

**D1Q3 Lattice Model:**

Each node has 3 discrete velocity directions:
$$C = \\{0, +1, -1\\}$$
with corresponding weights:
$$W = \\left( \\tfrac{2}{3},\\, \\tfrac{1}{6},\\, \\tfrac{1}{6} \\right)$$

**BGK Collision Operator (single relaxation time):**
$$f_i(x,t+1) = f_i(x,t) - \\frac{1}{\\tau} \\left(f_i(x,t) - f_i^{eq}(x,t)\\right)$$

**Equilibrium distribution for thermal problems:**
$$f_i^{eq}(x,t) = W_i\\, T(x,t)$$

**Thermal diffusivity relation:**
$$\\alpha = \\frac{1}{3} \\left(\\tau - \\tfrac{1}{2}\\right)$$

Since LBM inherently models **time evolution**, the solver is **transient** — the simulation progresses over iterations until steady-state temperature distribution is reached.

**Boundary conditions:** Left boundary $T = 100$, Right boundary $T = 100$, heat source at center $T = 1000$.

**Validation:** The computed temperature profile is compared against the analytical solution of the 1D steady-state heat conduction equation ($\\partial^2 T / \\partial x^2 = 0$). Results match the analytical solution well, confirming the LBM thermal formulation.`,
      compilation: `export OMP_NUM_THREADS=<threads>\ng++ 1D_heat_diff.cpp -fopenmp -o heat_lbm\n./heat_lbm`,
      outputStructure: [
        'Time-resolved: output_folders/temp_output_t<time>',
        'Steady-state: output.dat',
        'Columns: x node index, T(x,t)',
      ],
      notes: 'Computed steady-state profile matches the analytical solution for 1D heat conduction, confirming the LBM formulation.',
    },
  },
  {
    id: 'lid-driven-cavity',
    title: 'Lid-Driven Cavity',
    excerpt: 'LBM solver for 2D incompressible lid-driven cavity using D2Q9 BGK model, validated against Ghia et al. (1982).',
    tags: ['LBM', 'D2Q9', 'BGK', 'Cavity Flow', 'C++'],
    github: 'https://github.com/AdityaJaiswal17/Lattice_Boltzmann_Method/blob/main/Lid_Driven_Cavity/cavity.cpp',
    images: [
      { src: '/images/self_upload/lbm/Re_100_lowres.gif', caption: 'Velocity field animation at Re = 100.' },
      { src: '/images/self_upload/lbm/Re_500_lowres.gif', caption: 'Velocity field animation at Re = 500.' },
      { src: '/images/self_upload/lbm/validation_UY.png', caption: 'U velocity at x=0.5 vs Ghia et al.' },
      { src: '/images/self_upload/lbm/validation_XV.png', caption: 'V velocity at y=0.5 vs Ghia et al.' },
    ],
    method: 'lbm' as const,
    fullContent: {
      title: 'Lid-Driven Cavity Solver (C++ LBM)',
      description: `LBM solver for **2D incompressible lid-driven cavity** using the **D2Q9 velocity model** and **BGK collision operator**.

**The Lattice Boltzmann Equation (BGK):**
$$f_i(\\mathbf{x} + \\mathbf{c}_i \\Delta t, t+\\Delta t) = f_i(\\mathbf{x},t) - \\frac{1}{\\tau} \\Big( f_i(\\mathbf{x},t) - f_i^{eq}(\\mathbf{x},t) \\Big)$$

where $\\tau = 3\\nu + 0.5$ is the relaxation parameter related to kinematic viscosity $\\nu$.

**Equilibrium distribution:**
$$f_i^{eq} = w_i \\rho \\Big[ 1 + 3(\\mathbf{c}_i \\cdot \\mathbf{u}) + \\frac{9}{2}(\\mathbf{c}_i \\cdot \\mathbf{u})^2 - \\frac{3}{2}\\mathbf{u}^2 \\Big]$$

**Macroscopic properties:**
$$\\rho = \\sum_{i=0}^{8} f_i, \\qquad \\mathbf{u} = \\frac{\\sum_{i=0}^{8} f_i \\mathbf{c}_i}{\\rho}$$

**D2Q9 lattice weights:**
$$w_0 = \\tfrac{4}{9}, \\quad w_{1-4} = \\tfrac{1}{9}, \\quad w_{5-8} = \\tfrac{1}{36}$$

**Collision and Streaming steps:**

Collision: $f_i^* = f_i(1-\\tau^{-1}) + f_i^{eq}\\,\\tau^{-1}$

Streaming: $f_i(\\mathbf{x}+\\mathbf{c}_i, t+1) = f_i^*(\\mathbf{x},t)$

**Boundary conditions:**
- Top wall (lid): moving at $U_{\\text{wall}} = 0.1$ — implemented using a modified bounce-back scheme
- Bottom, left, right walls: no-slip (standard bounce-back)

**Computational setup:** Grid 101×101, max iterations 10⁵. Simulation stops early if:
$$res_{u_x} \\le 10^{-7}, \\quad res_{u_y} \\le 10^{-5}$$

**Validation:** Results compared against [Ghia et al. (1982)](http://www.msaidi.ir/upload/Ghia1982.pdf?i=1) benchmark. Non-dimensionalization used:
$$U^* = \\frac{u_x}{U_{\\text{wall}}}, \\quad V^* = \\frac{u_y}{U_{\\text{wall}}}, \\quad x^* = \\frac{x}{L}, \\quad y^* = \\frac{y}{L}$$

At Re = 100, the primary vortex forms at the cavity center. At Re = 500, stronger corner vortices and more complex flow structures appear.`,
      compilation: `g++ cavity.cpp -o cavity\n./cavity`,
      outputStructure: [
        'Saved timesteps: output_t*.dat',
        'Columns: i, j, uₓ, uᵧ, |u|, ρ',
      ],
      notes: 'At Re=100, primary vortex forms at cavity center. At Re=500, stronger corner vortices appear. Validated against Ghia et al. (1982).',
    },
  },
  {
    id: 'flow-past-cylinder',
    title: 'Flow Past Cylinder',
    excerpt: 'Incompressible viscous flow past a circular cylinder using D2Q9 BGK model at Re=100, capturing the von Kármán vortex street.',
    tags: ['LBM', 'D2Q9', 'BGK', 'Vortex Shedding', 'OpenMP', 'C++'],
    github: 'https://github.com/AdityaJaiswal17/Lattice_Boltzmann_Method/blob/main/Flow_past_cylinder/flow_past_cylinder.cpp',
    images: [
      { src: '/images/self_upload/flowPastCylinder.gif', caption: 'Flow past cylinder at Re = 100 — von Kármán vortex street.' },
    ],
    method: 'lbm' as const,
    fullContent: {
      title: 'Flow Past a Cylinder (D2Q9 – BGK Model)',
      description: `Models **incompressible viscous flow past a circular cylinder** using the **Lattice Boltzmann Method** with a D2Q9 lattice and BGK collision model at a default **Reynolds number of 100**.

The simulation is carried out on a **2D channel domain** with a cylinder of radius $R = 25$ placed near the inlet.

**Governing parameters:**
- Inlet velocity: $U_{\\text{inlet}} = 0.1$
- Kinematic viscosity: $\\nu = 0.05$
- Relaxation time: $\\tau = 3\\nu + \\tfrac{1}{2}$

**Collision:** Standard BGK model. **Streaming:** Nearest-neighbor propagation on the D2Q9 lattice.

**Force computation:** Based on momentum exchange at the fluid–solid interface.

To enhance computational efficiency, **OpenMP parallelization** has been implemented in the **collision, streaming, and macroscopic update loops**, reducing runtime significantly for high-resolution domains and long transient evolutions.

**Boundary conditions:**
- **Inlet (left):** Velocity inlet with constant streamwise velocity profile
- **Outlet (right):** Zero-gradient (convective outflow)
- **Top & bottom:** Periodic boundary conditions
- **Cylinder surface:** No-slip bounce-back boundary condition (fluid velocity at wall = 0)

**Key flow features captured:**
- Boundary layer separation at the cylinder surface
- Formation of a recirculation zone immediately downstream
- Development of the **von Kármán vortex street** — periodic vortex shedding
- High velocity gradients near the cylinder and in the shear layers
- Time-varying hydrodynamic forces on the cylinder due to alternating vortex shedding

A helper script [\`saveimage.sh\`](https://github.com/AdityaJaiswal17/Lattice_Boltzmann_Method/blob/main/Flow_past_cylinder/saveimage.sh) converts data files into contour plots that can be combined into animations to analyze unsteady flow evolution.`,
      compilation: `export OMP_NUM_THREADS=<threads>\ng++ flow_past_cylinder.cpp -fopenmp -o flow_cylinder\n./flow_cylinder`,
      outputStructure: [
        'Output folder: output/',
        'Columns: x, y, uₓ, uᵧ, |u|, ρ, Fₓ, Fᵧ',
        'Force data: net hydrodynamic force on cylinder per timestep',
      ],
      notes: 'Captures boundary layer separation, recirculation zone, and von Kármán vortex street. Time-varying forces reflect alternating vortex shedding.',
    },
  },
]

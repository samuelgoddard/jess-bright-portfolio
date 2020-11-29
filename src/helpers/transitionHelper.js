export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
	}
}

export const fadeSlow = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  },
	exit: {
    opacity: 0,
		transition: { delay: 0.25, duration: 0.5, ease: [0.76, 0, 0.24, 1] }
	}
}

export const revealInOut = {
	initial: { y: "100%", opacity: 0 },
	enter: { 
    y: "0%",
    opacity: 1,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  },
  exit: { 
    y: "100%",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
  }
}

export const revealInOutMini = {
	initial: { y: 50, opacity: 0 },
	enter: { 
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  },
  exit: { 
    y: 50,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  }
}
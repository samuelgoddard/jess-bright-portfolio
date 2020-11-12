export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
	}
}

export const revealInOut = {
	initial: { y: "100%", opacity: 0 },
	enter: { 
    y: "0%",
    opacity: 1,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
  },
  exit: { 
    y: "100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  }
}

export const revealInOutMini = {
	initial: { y: 50, opacity: 0 },
	enter: { 
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
  },
  exit: { 
    y: 50,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  }
}
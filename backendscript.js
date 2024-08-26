document.getElementById('feedbackForm').addEventListener('submit', function(event) {
	event.preventDefault();

	const formData = new FormData(this);
	const name = formData.get('name');
	const email = formData.get('email');
	const feedback = formData.get('feedback');
	const timestamp = new Date().toISOString();

	const issueTitle = `Feedback from ${name} at ${timestamp}`;
	const issueBody = `**Name:** ${name}\n**Email:** ${email}\n**Feedback:**\n${feedback}\n**Submitted at:** ${timestamp}`;

	// Redirect to GitHub issues page to submit issue
	window.open(`https://github.com/UwUtisum/recruitment.pryzum.net/issues/new?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}`, '_blank');
});
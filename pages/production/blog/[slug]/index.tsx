import { useRouter } from 'next/router';	
const index = () => {
	const router = useRouter();
	const { slug } = router.query;
	console.log(slug);
	return (
		<>
			<h1>Hello World</h1>
		</>
	)
}

export default index

import ContentLoader from "react-content-loader"
function Skeleton() {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={465}
            viewBox="0 0 280 465"
            backgroundColor="#a6a6a6"
            foregroundColor="#a08d8d"

        >
            <circle cx="140" cy="130" r="130" />
            <rect x="0" y="272" rx="10" ry="10" width="280" height="20" />
            <rect x="0" y="310" rx="10" ry="10" width="280" height="60" />
            <rect x="0" y="390" rx="10" ry="10" width="80" height="30" />
            <rect x="195" y="390" rx="10" ry="10" width="85" height="30" />
        </ContentLoader>
    );
}

export default Skeleton;
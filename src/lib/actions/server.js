const baseUrl = process.env.NEXT_PUBLIC_SERVER;

export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`, {
        next: { revalidate: 60 },
        // cache: "no-store"
    })

    if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
    }

    return res.json();
}
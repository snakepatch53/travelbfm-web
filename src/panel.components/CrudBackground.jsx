export default function CrudBackground({ src = "/image/food1.jpg" }) {
    return (
        <div className="fixed inset-0 w-full h-full">
            <img src={src} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
    );
}

const Heromap = () => {
  return (
    <section className="col-span-12 left-52 w-[600px] lg:col-span-8 bg-surface-container top-24 border border-outline-variant p-1 relative overflow-hidden group h-[500px]">

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary z-10" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary z-10" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      <div
        className="w-full h-full bg-cover bg-center opacity-70 relative z-0"
        data-alt="A highly detailed, technical digital map of the globe..."
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9DsiZ-Flo47cafO5xwLNMsAsdVBH8ZDsb6V4z17N95Wn12WDxEVS6NXeNr2IIkc5IEnTF600CS0IjeMB5GLuYrq_6vyOk1vj4d7RY5ZMyAxd8annjqMJaKDXmbMSdjyfQGffP-Dq2EoYjSYLeGEcSykdxEbrehMePdfyEedxJmfWhDlZtnNTCois5-tiSrs5rpBoi6vUACfr5B5j23t5KXkhEDccG_AjnULMBTJWd8lmPYQPqkSlwmx4GAU_kpp1dVOIF3PslIbE')",
        }}
      />

      {/* Top label */}
      <div className="absolute top-4 left-4 z-10">
        <h2 className="font-label-caps text-label-caps text-primary mb-1">
          GLOBAL_THREAT_VECTOR
        </h2>
        <p className="font-code-snippet text-code-snippet text-on-surface-variant">
          MONITORING ACTIVE NODES
        </p>
      </div>

      {/* Status nodes */}
      <div className="absolute bottom-4 right-4 z-10 flex gap-2">
        <span className="px-2 py-1 border border-primary text-primary font-code-snippet text-[10px] bg-black/50">
          NODE_01: STABLE
        </span>
        <span className="px-2 py-1 border border-error text-error font-code-snippet text-[10px] bg-black/50 animate-pulse">
          NODE_02: ALERT
        </span>
      </div>

    </section>
  );
};

export default Heromap;